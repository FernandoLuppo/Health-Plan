//  Hooks
import React, { useState } from "react"

//  Style
import "../css/Form.Module.css"

function Form() {

    //  States
    const [inputs, setInputs] = useState()
    const [values, setValues ] = useState()

    //  save Inputs Values
    function handleChangeValues(item) {
        setValues(prevValue => ({
            ...prevValue,
            [item.target.name]: item.target.value
        }))
    }

    //  Add Inputs
    const currentPeople = (e) => {
        //  Remove Demonstrative Value

        //  One Person
        if(e.target.value == 1) {

            //  First People Name
            const nameOneTitle = React.createElement("p", {key: "nameOneTitle", className: "title"},  "1º Beneficiário Nome");
            const nameOneInput = React.createElement("input",{key: "nameOneInput", className: "input", type: "text", name: "nameOneInput", id: "nameOneInput", onChange:(handleChangeValues)})
            //  First People Age
            const ageOneTitle = React.createElement("p", {key: "ageOneTitle", className: "title"},  "1º Beneficiário Idade");
            const ageOneInput = React.createElement("input",{key: "ageOneInput", className: "input", type: "number", name: "ageOneInput", id: "ageOneInput", onChange:(handleChangeValues)})

            setInputs([nameOneTitle, nameOneInput, ageOneTitle, ageOneInput])

        }
        //  Two Person
        else if(e.target.value == 2) {
            //  First People Name
            const nameOneTitle = React.createElement("p", {key: "nameOneTitle", className: "title"},  "1º Beneficiário Nome");
            const nameOneInput = React.createElement("input",{key: "nameOneInput", className: "input", type: "text", name: "nameOneInput", id: "nameOneInput", onChange:(handleChangeValues)})
            //  First People Age
            const ageOneTitle = React.createElement("p", {key: "ageOneTitle", className: "title"},  "1º Beneficiário Idade");
            const ageOneInput = React.createElement("input",{key: "ageOneInput", className: "input", type: "number", name: "ageOneInput", id: "ageOneInput", onChange:(handleChangeValues)})
            //  Second People Name
            const nameTwoTitle = React.createElement("p", {key: "nameTwoTitle", className: "title"},  "2º Beneficiário Nome");
            const nameTwoInput = React.createElement("input",{key: "nameTwoInput", className: "input", type: "text", name: "nameTwoInput", id: "nameTwoInput", onChange:(handleChangeValues)})
            //  Second People Age
            const ageTwoTitle = React.createElement("p", {key: "ageTwoTitle", className: "title"},  "2º Beneficiário Idade");
            const ageTwoInput = React.createElement("input",{key: "ageTwoInput", className: "input", type: "number", name: "ageTwoInput", id: "ageTwoInput", onChange:(handleChangeValues)})

            setInputs([nameOneTitle, nameOneInput, ageOneTitle, ageOneInput, nameTwoTitle, nameTwoInput, ageTwoTitle, ageTwoInput])
        }
        //  Three Person 
        else if(e.target.value == 3) {
            //  First People Name
            const nameOneTitle = React.createElement("p", {key: "nameOneTitle", className: "title"},  "1º Beneficiário Nome");
            const nameOneInput = React.createElement("input",{key: "nameOneInput", className: "input", type: "text", name: "nameOneInput", id: "nameOneInput", onChange:(handleChangeValues)})
            //  First People Age
            const ageOneTitle = React.createElement("p", {key: "ageOneTitle", className: "title"},  "1º Beneficiário Idade");
            const ageOneInput = React.createElement("input",{key: "ageOneInput", className: "input", type: "number", name: "ageOneInput", id: "ageOneInput", onChange:(handleChangeValues)})
            //  Second People Name
            const nameTwoTitle = React.createElement("p", {key: "nameTwoTitle", className: "title"},  "2º Beneficiário Nome");
            const nameTwoInput = React.createElement("input",{key: "nameTwoInput", className: "input", type: "text", name: "nameTwoInput", id: "nameTwoInput", onChange:(handleChangeValues)})
            //  Second People Age
            const ageTwoTitle = React.createElement("p", {key: "ageTwoTitle", className: "title"},  "2º Beneficiário Idade");
            const ageTwoInput = React.createElement("input",{key: "ageTwoInput", className: "input", type: "number", name: "ageTwoInput", id: "ageTwoInput", onChange:(handleChangeValues)})
            //  Third People Name
            const nameThreeTitle = React.createElement("p", {key: "nameThreeTitle", className: "title"},  "3º Beneficiário Nome");
            const nameThreeInput = React.createElement("input",{key: "nameThreeInput", className: "input", type: "text", name: "nameThreeInput", id: "nameThreeInput", onChange:(handleChangeValues)})
            //  Third People Age
            const ageThreeTitle = React.createElement("p", {key: "ageThreeTitle", className: "title"},  "3º Beneficiário Idade");
            const ageThreeInput = React.createElement("input",{key: "ageThreeInput", className: "input", type: "number", name: "ageThreeInput", id: "ageThreeInput", onChange:(handleChangeValues)})

            setInputs([
                nameOneTitle, nameOneInput, ageOneTitle, ageOneInput, nameTwoTitle, nameTwoInput, ageTwoTitle, ageTwoInput,  
                nameThreeTitle, nameThreeInput, ageThreeTitle, ageThreeInput, 
            ])
        }
        //  Four Person 
        else if(e.target.value == 4) {
            //  First People Name
            const nameOneTitle = React.createElement("p", {key: "nameOneTitle", className: "title"},  "1º Beneficiário Nome");
            const nameOneInput = React.createElement("input",{key: "nameOneInput", className: "input", type: "text", name: "nameOneInput", id: "nameOneInput", onChange:(handleChangeValues)})
            //  First People Age
            const ageOneTitle = React.createElement("p", {key: "ageOneTitle", className: "title"},  "1º Beneficiário Idade");
            const ageOneInput = React.createElement("input",{key: "ageOneInput", className: "input", type: "number", name: "ageOneInput", id: "ageOneInput", onChange:(handleChangeValues)})
            //  Second People Name
            const nameTwoTitle = React.createElement("p", {key: "nameTwoTitle", className: "title"},  "2º Beneficiário Nome");
            const nameTwoInput = React.createElement("input",{key: "nameTwoInput", className: "input", type: "text", name: "nameTwoInput", id: "nameTwoInput", onChange:(handleChangeValues)})
            //  Second People Age
            const ageTwoTitle = React.createElement("p", {key: "ageTwoTitle", className: "title"},  "2º Beneficiário Idade");
            const ageTwoInput = React.createElement("input",{key: "ageTwoInput", className: "input", type: "number", name: "ageTwoInput", id: "ageTwoInput", onChange:(handleChangeValues)})
            //  Third People Name
            const nameThreeTitle = React.createElement("p", {key: "nameThreeTitle", className: "title"},  "3º Beneficiário Nome");
            const nameThreeInput = React.createElement("input",{key: "nameThreeInput", className: "input", type: "text", name: "nameThreeInput", id: "nameThreeInput", onChange:(handleChangeValues)})
            //  Third People Age
            const ageThreeTitle = React.createElement("p", {key: "ageThreeTitle", className: "title"},  "3º Beneficiário Idade");
            const ageThreeInput = React.createElement("input",{key: "ageThreeInput", className: "input", type: "number", name: "ageThreeInput", id: "ageThreeInput", onChange:(handleChangeValues)})
            //  Fourth People Name
            const nameFourTitle = React.createElement("p", {key: "nameFourTitle", className: "title"},  "4º Beneficiário Nome");
            const nameFourInput = React.createElement("input",{key: "nameFourInput", className: "input", type: "text", name: "nameFourInput", id: "nameFourInput", onChange:(handleChangeValues)})
            //  Fourth People Age
            const ageFourTitle = React.createElement("p", {key: "ageFourTitle", className: "title"},  "4º Beneficiário Idade");
            const ageFourInput = React.createElement("input",{key: "ageFourInput", className: "input", type: "number", name: "ageFourInput", id: "ageFourInput", onChange:(handleChangeValues)})
            
            setInputs([
                nameOneTitle, nameOneInput, ageOneTitle, ageOneInput, nameTwoTitle, nameTwoInput, ageTwoTitle, ageTwoInput, nameThreeTitle,
                nameThreeInput, ageThreeTitle, ageThreeInput, nameFourTitle, nameFourInput, ageFourTitle, ageFourInput,
            ])
        }

        let peopleNullValue = document.getElementById("peopleNullValue")

        if(e.target.value != "peopleNullValue") {
            peopleNullValue.remove()
        }
    }

    return(
        <div className="form-plans">

            <select id="selectPerson" onChange={currentPeople} className="select-input">
                <option id="peopleNullValue" value="peopleNullValue" defaultValue>Selecione um valor...</option>
                <option id="onPerson" value="1">Uma Pessoa</option>
                <option id="twoPerson" value="2">Duas Pessoa</option>
                <option id="threePerson" value="3">Três Pessoa</option>
                <option id="fourPerson" value="4">Quatro Pessoa</option>
            </select>

            <div>
               {inputs}
            </div>

        </div>
    )
}

export default Form



