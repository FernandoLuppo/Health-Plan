//  Controller
const validationController = require("./validationController")
//  Plans
const standard = require("./plans/standard")
const silver = require("./plans/silver")
const gold = require("./plans/gold")
const platinum = require("./plans/platinum")
const health = require("./plans/health")
const tw = require("./plans/tw")

//  Function
const formController = {
    form: (req, res) => {
        //  Validation
        validationController.validation(req, res)
        //  Plans
        standard.standardPlan(req, res)
        silver.silverPlan(req , res)
        gold.goldPlan(req, res)
        platinum.platinumPlan(req, res)
        health.healthPlan(req, res)
        tw.twPlan(req, res)
    }
}
module.exports = formController