const validationController = {
    validation: (req, res) => {
        //  Values
        const { selectPerson, nameOne, ageOne, nameTwo, ageTwo, nameThree, ageThree, nameFour, ageFour, selectPlan } = req.body

        //  Validation
        if(selectPerson){
            if(selectPerson == "" || selectPerson == null || selectPerson == undefined) {
                res.status(400).send("There was an error in validation")
            }
        }

        if(nameOne){
            if(nameOne == "" || nameOne == null || nameOne == undefined){
                res.status(400).send("There was an error in validation")
            }
        }

        if(ageOne){
            if(ageOne == "" || ageOne == null || ageOne == undefined){
                res.status(400).send("There was an error in validation")
            }
        }

        if(nameTwo){
            if(nameTwo == "" || nameTwo == null || nameTwo == undefined){
                res.status(400).send("There was an error in validation")
            }
        }

        if(ageTwo){
            if(ageTwo == "" || ageTwo == null || ageTwo == undefined){
                res.status(400).send("There was an error in validation")
            }
        }

        if(nameThree){
            if(nameThree == "" || nameThree == null || nameThree == undefined){
                res.status(400).send("There was an error in validation")
            }
        }

        if(ageThree){
            if(ageThree == "" || ageThree == null || ageThree == undefined){
                res.status(400).send("There was an error in validation")
            }
        }

        if(nameFour){
            if(nameFour == "" || nameFour == null || nameFour == undefined){
                res.status(400).send("There was an error in validation")
            }
        }

        if(ageFour){
            if(ageFour == "" || ageFour == null || ageFour == undefined){
                res.status(400).send("There was an error in validation")
            }
        }

        if(selectPlan){
            if(selectPlan == "" || selectPlan == null || selectPlan == undefined){
                res.status(400).send("There was an error in validation")
            }
        }
    }
}

module.exports = validationController