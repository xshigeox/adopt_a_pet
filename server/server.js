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
      "SELECT pet_types.type, pet_types.description, adoptable_pets.img_url FROM pet_types JOIN adoptable_pets ON adoptable_pets.pet_type_id = pet_types.id GROUP BY pet_types.type, pet_types.description, adoptable_pets.img_url"
    )
    .then(result => {
      let arrayTypePets = []
      arrayTypePets.push(result.rows.find(animal => animal.type === "reptile"))
      arrayTypePets.push(
        result.rows.find(animal => animal.type === "guinea pig")
      )
      return res.json(arrayTypePets)
    })
    .catch(error => {
      console.log(error)
    })
})

app.get("/api/v1/adoptionApplications", (req, res) => {
  pool
    .query(
      "SELECT adoption_applications.name AS person_name, adoption_applications.phone_number, adoption_applications.email, adoption_applications.home_status, adoption_applications.application_status, adoptable_pets.name AS pet_name, adoptable_pets.id, adoptable_pets.img_url, adoptable_pets.vaccination_status, adoptable_pets.adoption_story, adoptable_pets.adoption_status FROM adoption_applications JOIN adoptable_pets ON adoptable_pets.id = adoption_applications.pet_id WHERE adoptable_pets.adoption_status = 'Pending' OR adoptable_pets.adoption_status = 'Denied'"
    )
    .then(result => {
      return res.json(result.rows)
    })
    .catch(error => {
      console.log(error)
    })
})

app.get("/api/v1/surrenderApplications", (req, res) => {
  pool
    .query(
      "SELECT * FROM pet_surrender_applications WHERE application_status = 'Pending'"
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
      "SELECT adoptable_pets.* FROM pet_types JOIN adoptable_pets ON adoptable_pets.pet_type_id = pet_types.id WHERE pet_types.type LIKE $1 AND adoptable_pets.adoption_status = 'Pending' OR adoptable_pets.adoption_status = 'Denied'",
      [petType]
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

app.post("/api/v1/login", (req, res) => {
  const { username, password } = req.body
  pool
    .query("SELECT * FROM admin_table WHERE username = $1 and password = $2", [
      username,
      password
    ])
    .then(result => {
      return res.json(result)
    })
    .catch(error => {
      console.log(error)
    })
})

app.post("/api/v1/adoptionApplication", (req, res) => {
  const {
    name,
    phoneNumber,
    email,
    homeStatus,
    applicationStatus,
    petId
  } = req.body
  pool
    .query(
      "INSERT INTO adoption_applications(name, phone_number, email, home_status, application_status, pet_id) VALUES($1, $2, $3, $4, $5, $6)",
      [name, phoneNumber, email, homeStatus, applicationStatus, petId]
    )
    .then(result => {
      return res.json(result.rows)
    })
    .catch(error => {
      console.log(error)
    })
})

app.post("/api/v1/approvalStatus", (req, res) => {
  const { status, id } = req.body

  pool
    .query("UPDATE adoptable_pets SET adoption_status = $1 WHERE id = $2", [
      status,
      id
    ])
    .then(result => {
      return res.json(result.rows)
    })
    .catch(error => {
      console.log(error)
    })
})

app.post("/api/v1/surrenderStatus", (req, res) => {
  const {
    name,
    img_url,
    age,
    vaccination_status,
    adoption_story,
    adoption_status,
    pet_type_id,
    application_status
  } = req.body

  pool
    .query(
      "INSERT INTO adoptable_pets(name, img_url, age, vaccination_status, adoption_story, adoption_status, pet_type_id) VALUES($1, $2, $3, $4, $5, $6, $7)",
      [
        name,
        img_url,
        age,
        vaccination_status,
        adoption_story,
        adoption_status,
        pet_type_id
      ]
    )
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
        "Pending"
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
