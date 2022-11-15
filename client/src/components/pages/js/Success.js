//  Hooks
import { Link } from "react-router-dom"
//  Components
import Card from "../../layouts/js/Card"
import Header from "../../layouts/js/Header"
//  Style
import "../css/Success.Module.css"

function Success() {
    return(
        <div>
            <Header/>
            <div className="background">
                <br/>
                <div className="container-form">
                    <h1>Parabéns</h1>
                    <h3>Seu novo plano foi contratado com sucesso<br/>Veja abaixo as informações do seu plano</h3>
                    <div className="your-plan">
                        <Card/>
                    </div>
                    <div className="container-link">
                        <button className="success-button"><Link to="/" className="button-link">Voltar para a Home</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success