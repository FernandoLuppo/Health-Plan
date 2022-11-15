
import { Link } from "react-router-dom"
//  Components
import Header from "../../layouts/js/Header"

//  Style
import "../css/Home.Module.css"

function Home() {
    return(
        <div className="container">
            <Header />
            <section>
                <article>
                    <h2>Para tudo o que você precisar</h2>
                    <p>
                        O cuidado com a saúde é uma preocupação diária e importante, somos a clinica pensada em ajudar você
                        a atingir o melhor da sua qualidade de vida e saúde por um preço mais acessível, não se descuide
                        da saúde, estamos aqui pra você.
                    </p>
                    <h4>A Clinica certa é para todos, conheça já:</h4>
                    <button><Link to={"/plans"} className="button-link" >Escolha um Planos</Link></button>
                </article>
            </section>
        </div>
    )
}

export default Home