const express = require("express")
const path = require("path")
const logger = require("morgan")
const bodyParser = require("body-parser")
const hbsMiddleware = require("express-handlebars")
const fs = require("fs")
const _ = require("lodash")
const createError = require("http-errors")

const app = express()

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
app.get("/api/guinea_pigs", (req, res) =>  {
  pool
  .query("SELECT * FROM adoptable_pets WHERE pet_type_id = 1")
  .then(result =>  {
    return res.json(result.rows)
  })
  .catch(error =>  {
    console.log(error)
  })
})

app.get("/api/reptiles", (req, res)  =>  {
  pool
  .query("SELECT * FROM adoptable_pets WHERE pet_type_id = 2")
  .then(result => {
    return res.json(result.rows)
  })
  .catch(error => {
    console.log(error)
  })
})

app.get("/api/pets/:id", (req, res) => {
  const animalId = req.params.id
  pool
    .query("SELECT * FROM adoptable_pets WHERE id = $1",
    [animalId])
    .then(result => {
      return res.json(result.rows)
    })
    .catch(error => {
      console.log(error)
    })
})


app.get("*", (req, res) => {
  res.render("home")
})

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening...")
})

module.exports = app
