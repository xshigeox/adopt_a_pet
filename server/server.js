const express = require("express")
const path = require("path")
const logger = require("morgan")
const bodyParser = require("body-parser")
const hbsMiddleware = require("express-handlebars")
const fs = require("fs")
const _ = require("lodash")
const createError = require("http-errors")

const app = express()

app.get("/", (req, res) => {
  res.redirect("/pets")
})

app.set("views", path.join(__dirname, "../views"))
app.engine(
  "hbs",
  hbsMiddleware({
    defaultLayout: "default",
    extname: ".hbs"
  })
)

app.set("view engine", "hbs")

app.use(logger("dev"))
app.use(express.json())

app.use(express.static(path.join(__dirname, "../public")))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const { Pool } = require("pg")

const pool = new Pool({
  connectionString: "postgres://postgres:password@127.0.0.1:5432/adopt_a_pet"
})

// Express routes
app.get("/api/v1/pet_type", (req, res) => {
  pool
    .query(
      "SELECT pet_types.type, pet_types.description, adoptable_pets.img_url FROM pet_types JOIN adoptable_pets ON adoptable_pets.pet_type_id = pet_types.id GROUP BY pet_types.type, pet_types.description, adoptable_pets.img_url LIMIT 2"
    )
    .then(result => {
      return res.json(result.rows)
    })
    .catch(error => {
      console.log(error)
    })
})

app.get("/api/v1/:pet_type", (req, res) => {
  let petType = req.params.pet_type
  pool
    .query(
      "SELECT adoptable_pets.* FROM pet_types JOIN adoptable_pets ON adoptable_pets.pet_type_id = pet_types.id WHERE pet_types.type LIKE $1", [petType]
    )
    .then(result => {
      return res.json(result.rows)
    })
    .catch(error => {
      console.log(error)
    })
})

app.get("/api/v1/pets/:id", (req, res) => {
  const animalId = req.params.id
  pool
    .query("SELECT * FROM adoptable_pets WHERE id = $1", [animalId])
    .then(result => {
      return res.json(result.rows)
    })
    .catch(error => {
      console.log(error)
    })
})

app.post("/api/v1/newPet", (req, res) => {
  const {
    name,
    phoneNumber,
    email,
    petName,
    petAge,
    petType,
    petImageUrl,
    vaccinationStatus
  } = req.body

  pool
    .query(
      "INSERT INTO pet_surrender_applications(name, phone_number, email, pet_name, pet_age, pet_type_id, pet_img_url, vaccination_status, application_status) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)",
      [
        name,
        phoneNumber,
        email,
        petName,
        petAge,
        petType,
        petImageUrl,
        vaccinationStatus,
        "pending"
      ]
    )
    .then(result => {
      return res.json(result.rows)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
})

app.get("*", (req, res) => {
  res.render("home")
})

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening...")
})

module.exports = app
