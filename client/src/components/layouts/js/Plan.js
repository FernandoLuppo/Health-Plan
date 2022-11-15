//  Style
import "../css/Plan.Module.css"

function Plan() {
    //  Remove Demonstrative Value
    function currentPlan(e) {

        let planNullValue = document.getElementById("planNullValue")

        if(e.target.value != "planNullValue") {
            planNullValue.remove()
        }
    }

    return (
        <div className="form-plan">

            <select id="selectPlan" onChange={currentPlan} className="select-input">
                <option id="planNullValue" value="planNullValue" defaultValue>Selecione um valor...</option>
                <option id="standard" value="standard">Standard</option>
                <option id="silver" value="silver">Silver</option>
                <option id="gold" value="gold">Gold</option>
                <option id="platinum" value="platinum">Platinum</option>
                <option id="health" value="health">Health</option>
                <option id="tw" value="tw">TW</option>
            </select>

        </div>
    )
}

export default Plan