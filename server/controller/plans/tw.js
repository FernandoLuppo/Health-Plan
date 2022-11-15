//  Load Modules
//  BD
const HealthPlan = require("../../models/HealthPlan")
//  Controller
const priceController = require("../priceController")

//  Function
const tw = {
    twPlan: (req, res) => {
        //  Values
        const { selectPerson, nameOne, ageOne, nameTwo, ageTwo, nameThree, ageThree, nameFour, ageFour, selectPlan } = req.body

           //  Amount of People = 1
        if(selectPlan == "tw" && selectPerson == 1 ){
            //  Calculate Age
            const calcAgeOne = priceController.calcAge(ageOne)
            //  Calculate Price
            const priceOne = priceController.calcPrice(calcAgeOne, 60, 70, 80)
            const fullPrice = priceOne
            //  Save
            HealthPlan.create({selectPerson, nameOne, ageOne, priceOne, fullPrice, selectPlan,})
            .catch(error => res.status(500).send("There was an error to try save, the error is: " + error))
        }
        //  Amount of People = 2
        else if (selectPlan == "tw" && selectPerson == 2) {
            //  Calculate Age
            const calcAgeOne = priceController.calcAge(ageOne)
            const calcAgeTwo = priceController.calcAge(ageTwo)
            //  Calculate Price
            const priceOne = priceController.calcPrice(calcAgeOne, 55, 65, 75)
            const priceTwo = priceController.calcPrice(calcAgeTwo, 55, 65, 75)
            const fullPrice = priceOne + priceTwo 
            //  Save
            HealthPlan.create({selectPerson, nameOne, ageOne, nameTwo, ageTwo, priceOne, priceTwo, fullPrice, selectPlan})
            .catch(error => res.status(500).send("There was an error to try save, the error is: " + error))
        }
        //  Amount of People = 3
        else if (selectPlan == "tw" && selectPerson == 3) {
            //  Calculate Age
            const calcAgeOne = priceController.calcAge(ageOne)
            const calcAgeTwo = priceController.calcAge(ageTwo)
            const calcAgeThree = priceController.calcAge(ageThree)
            //  Calculate Price
            const priceOne = priceController.calcPrice(calcAgeOne, 55, 65, 75)
            const priceTwo = priceController.calcPrice(calcAgeTwo, 55, 65, 75)
            const priceThree = priceController.calcPrice(calcAgeThree, 55, 65, 75)
            const fullPrice = priceOne + priceTwo + priceThree
            //  Save
            HealthPlan.create({selectPerson, nameOne, ageOne, nameTwo, ageTwo, nameThree, ageThree, priceOne, priceTwo, priceThree, fullPrice, selectPlan})
            .catch(error => res.status(500).send("There was an error to try save, the error is: " + error))
        }
        //  Amount of People = 4
        else if (selectPlan == "tw" && selectPerson == 4) {
            //  Calculate Age
            const calcAgeOne = priceController.calcAge(ageOne)
            const calcAgeTwo = priceController.calcAge(ageTwo)
            const calcAgeThree = priceController.calcAge(ageThree)
            const calcAgeFour = priceController.calcAge(ageFour)
            //  Calculate Price
            const priceOne = priceController.calcPrice(calcAgeOne, 55, 65, 75)
            const priceTwo = priceController.calcPrice(calcAgeTwo, 55, 65, 75)
            const priceThree = priceController.calcPrice(calcAgeThree, 55, 65, 75)
            const priceFour = priceController.calcPrice(calcAgeFour, 55, 65, 75)
            const fullPrice = priceOne + priceTwo + priceThree + priceFour
            //  Save
            HealthPlan.create({selectPerson, nameOne, ageOne, nameTwo, ageTwo, nameThree, ageThree, nameFour, ageFour, priceOne, priceTwo, priceThree, priceFour, fullPrice, selectPlan})
            .catch(error => res.status(500).send("There was an error to try save, the error is: " + error))
        }
    }
} 
module.exports = tw