//  Import Modules
import Axios from "axios"
import { useNavigate } from "react-router-dom"

//  Style
import "../css/ButtonForm.Module.css"

function ButtonPlan() {
    const navigate = useNavigate()
    
    //  Onclick Function
    function currentValue(e) {
        //  Input Select Person Quantity
        let selectPerson = document.getElementById("selectPerson")
        //  Person One Input
        let ageOneInput = document.getElementById("ageOneInput")
        let nameOneInput = document.getElementById("nameOneInput")
        //  Person Two Input
        let ageTwoInput = document.getElementById("ageTwoInput")
        let nameTwoInput = document.getElementById("nameTwoInput")
        //  Person Three Input
        let ageThreeInput = document.getElementById("ageThreeInput")
        let nameThreeInput = document.getElementById("nameThreeInput")
        //  Person Four Input
        let ageFourInput = document.getElementById("ageFourInput")
        let nameFourInput = document.getElementById("nameFourInput")
        //  Input Select Plan Type
        let selectPlan = document.getElementById("selectPlan")

        //  Validation
        //  Person Quantity Validation
        if(selectPerson.value == "" || selectPerson.value == "peopleNullValue") {
            e.preventDefault()
            selectPerson.style.border = "1px solid #ff0000"
        } else {
            selectPerson.style.border = "1px solid #2EA7DF"
        }

        //  Person Validation
        if (!ageOneInput) {
            e.preventDefault()
        } else {

            //  Validation Fist Person
            if(ageOneInput) {
                if(ageOneInput.value == ""){
                    e.preventDefault()
                    ageOneInput.style.border = "1px solid #ff0000"
                } else {
                    ageOneInput.style.border = "1px solid #2EA7DF"
                } 
            }
            if(nameOneInput) {
                if(nameOneInput.value == "") {
                    e.preventDefault()
                    nameOneInput.style.border = "1px solid #ff0000"
                } else {
                    nameOneInput.style.border = "1px solid #2EA7DF"
                }
            } 
    
            //  Validation Second Person
            if(ageTwoInput) {
                if(ageTwoInput.value == ""){
                    e.preventDefault()
                    ageTwoInput.style.border = "1px solid #ff0000"
                } else {
                    ageTwoInput.style.border = "1px solid #2EA7DF"
                }
            } 
            if(nameTwoInput) {
                if(nameTwoInput.value == ""){
                    e.preventDefault()
                    nameTwoInput.style.border = "1px solid #ff0000"
                } else {
                    nameTwoInput.style.border = "1px solid #2EA7DF"
                }
            } 

            //  Validation Third Person
            if(ageThreeInput) {
                if(ageThreeInput.value == "") {
                    e.preventDefault()
                    ageThreeInput.style.border = "1px solid #ff0000"
                } else {
                    ageThreeInput.style.border = "1px solid #2EA7DF"
                }
            } 
            if(nameThreeInput) {
                if(nameThreeInput.value == "") {
                    e.preventDefault()
                    nameThreeInput.style.border = "1px solid #ff0000"
                } else {
                    nameThreeInput.style.border = "1px solid #2EA7DF"
                }
            }
    
            //  Validation Fourth Person
            if (ageFourInput) {
                if(ageFourInput.value == "") {
                    e.preventDefault()
                    ageFourInput.style.border = "1px solid #ff0000"
                } else {
                    ageFourInput.style.border = "1px solid #2EA7DF"
                }
            } 
            if(nameFourInput) {
                if(nameFourInput.value == "") {
                    e.preventDefault()
                    nameFourInput.style.border = "1px solid #ff0000"
                } else {
                    nameFourInput.style.border = "1px solid #2EA7DF"
                }
            }
        }

        //  Page Change Validation
        if(selectPerson.value == 1){
            if(nameOneInput.value != "" && ageOneInput.value != "" && selectPlan.value != "" && selectPlan.value != "planNullValue") {
                navigate("/success")
            }
        }
        
        if(selectPerson.value == 2){
            if(nameOneInput.value != "" && ageOneInput.value != "" && nameTwoInput.value != "" && ageTwoInput.value != "" && selectPlan.value != "" && selectPlan.value != "planNullValue") {
                navigate("/success")
            }
        }

        if(selectPerson.value == 3){
            if(nameOneInput.value != "" && ageOneInput.value != "" && nameTwoInput.value != "" && ageTwoInput.value != "" && nameThreeInput.value != "" && ageThreeInput.value != "" && selectPlan.value != "" && selectPlan.value != "planNullValue") {
                navigate("/success")
            }
        }

        if(selectPerson.value == 4){
            if(nameOneInput.value != "" && ageOneInput.value != "" && nameTwoInput.value != "" && ageTwoInput.value != "" && nameThreeInput.value != "" && ageThreeInput.value != "" && nameFourInput.value != "" && ageFourInput.value != "" && selectPlan.value != "" && selectPlan.value != "planNullValue") {
                navigate("/success")
            }
        }

        //  Plan Type Validation
        if(selectPlan.value == "" || selectPlan.value == "planNullValue") {
            e.preventDefault()
            selectPlan.style.border = "1px solid #ff0000"
        } else {
            selectPlan.style.border = "1px solid #2EA7DF"
        }

        //  Send Values to Back-End
        if(selectPerson.value == 1){
            Axios.post("http://localhost:8080/registerPlan", {
                selectPerson: selectPerson.value,
                nameOne: nameOneInput.value,
                ageOne: ageOneInput.value,
                selectPlan: selectPlan.value,
            }).then(resp => console.log(resp)).catch(error => console.log("There was an error to try send the inputs values, the error is: " + error))
        }

        if(selectPerson.value == 2){
            Axios.post("http://localhost:8080/registerPlan", {
                selectPerson: selectPerson.value,
                nameOne: nameOneInput.value,
                ageOne: ageOneInput.value,
                nameTwo: nameTwoInput.value,
                ageTwo: ageTwoInput.value,
                selectPlan: selectPlan.value,
            }).then(resp => console.log(resp)).catch(error => console.log("There was an error to try send the inputs values, the error is: " + error))
        }

        if(selectPerson.value == 3){
            Axios.post("http://localhost:8080/registerPlan", {
                selectPerson: selectPerson.value,
                nameOne: nameOneInput.value,
                ageOne: ageOneInput.value,
                nameTwo: nameTwoInput.value,
                ageTwo: ageTwoInput.value,
                nameThree: nameThreeInput.value,
                ageThree: ageThreeInput.value,
                selectPlan: selectPlan.value,
            }).then(resp => console.log(resp)).catch(error => console.log("There was an error to try send the inputs values, the error is: " + error))
        }

        if(selectPerson.value == 4){
            Axios.post("http://localhost:8080/registerPlan", {
                selectPerson: selectPerson.value,
                nameOne: nameOneInput.value,
                ageOne: ageOneInput.value,
                nameTwo: nameTwoInput.value,
                ageTwo: ageTwoInput.value,
                nameThree: nameThreeInput.value,
                ageThree: ageThreeInput.value,
                nameFour: nameFourInput.value,
                ageFour: ageFourInput.value,
                selectPlan: selectPlan.value,
            }).then(resp => console.log(resp)).catch(error => console.log("There was an error to try send the inputs values, the error is: " + error))
        }
    }

    return(
        <div className="div-button">
            <button type="submit" onClick={currentValue}>Contratar Plano</button>
        </div>
    )
}
export default ButtonPlan