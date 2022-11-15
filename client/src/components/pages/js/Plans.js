//  Components
import Header from "../../layouts/js/Header"
import Plan from "../../layouts/js/Plan"
import Form from "../../layouts/js/Form"
import ButtonPlan from "../../layouts/js/ButtonPlan"

//  Style
import "../css/Plans.Module.css"

function Plans() {
    return(
        <div>
            <Header/>
            <div className="background">
                <br />
                <div className="container-form">
                    <h2>Preencha o formulário abaixo<br/>e escolha seu plano</h2> 
                    <form>
                        <div className="form-content">
                            <Form /> 
                            <Plan />
                        </div>
                        <ButtonPlan />
                    </form>
                </div>
                <br />
            </div>
        </div>
    )
}

export default Plans