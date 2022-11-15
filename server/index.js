//  Load Modules
const express = require("express")
const cors = require("cors")

//  Configs
const app = express()
const PORT = 8080
app.use(cors())
app.use(express.json())

//  Route
const pages = require("./routes/pages")

app.use("/", pages)


app.listen(PORT, () => console.log("Server running on port " + PORT))