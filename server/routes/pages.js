const express = require("express")
const router = express.Router()
const HealthPlan = require("../models/HealthPlan")


const formController = require("../controller/formController")

router.post("/registerPlan", formController.form)

router.get("/success", (req, res) => {
    HealthPlan.findAll()
    .then().then( values => {

        let length = values.length

        HealthPlan.findOne({where: {id: length}}).then(item => {
            let currentValue = item.dataValues
            res.send(currentValue)
        })

    })
    .catch(error => console.log("Houve um erro ao tentar pegar as informações do back " + error))
})

module.exports = router