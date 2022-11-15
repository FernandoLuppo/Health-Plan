//  Hooks
import React, {useState, useEffect} from "react"
import Axios from "axios"
//  Style
import "../css/Card.Module.css"

function Card() {
    //  States
    const [values, setValues] = useState()
    const [person, setPerson] = useState()
    //  Get Banc Values
    useEffect(() => {
        Axios.get("http://localhost:8080/success")
        .then(res => {
            setValues([res.data])
            setPerson([res.data.selectPerson])
        })
        .catch(error => console.log("There was an error to try get the banc informations, the error is: " + error))
    }, [])
    
    return(
        <div>
            {person == 1 && values.map(item => {
                return(
                    <div className="container-values">
                        <h3>Nome dos Beneficiários</h3>
                        <div className="values">
                            <ul>
                                <li>Nome: {item.nameOne}</li>
                            </ul>
                        </div>

                        <h3>Idade dos Beneficiários</h3>
                        <div className="values">
                            <ul>
                                <li>Idade: {item.ageOne}</li>
                            </ul>
                        </div>

                        <h3>Plano Escolhido</h3>
                        <div>
                            <span>Plano: {item.selectPlan}</span>
                        </div>

                        <h3>Valor Individual do Plano por Pessoa</h3>
                        <div className="values">
                            <ul>
                                <li>Preço Primeira Pessoa: R${item.priceOne},00</li>
                            </ul>
                        </div>

                        <h3>Valor Total do Plano</h3>
                        <span>Preço Total: R${item.fullPrice},00</span>
                    </div>
                )
            })}

            {person == 2 && values.map(item => {
                return(
                    <div className="container-values">
                        <h3>Nome dos Beneficiários</h3>
                        <div className="values">
                            <ul>
                                <li>Nome: {item.nameOne}</li>
                                <li>Nome: {item.nameTwo}</li>
                            </ul>
                        </div>

                        <h3>Idade dos Beneficiários</h3>
                        <div className="values">
                            <ul>
                                <li>Idade: {item.ageOne}</li>
                                <li>Idade: {item.ageTwo}</li>
                            </ul>
                        </div>

                        <h3>Plano Escolhido</h3>
                        <div>
                            <span>Plano: {item.selectPlan}</span>
                        </div>

                        <h3>Valor Individual do Plano por Pessoa</h3>
                        <div className="values">
                            <ul>
                                <li>Preço Primeira Pessoa: R${item.priceOne},00</li>
                                <li>Preço Segunda Pessoa: R${item.priceTwo},00</li>
                            </ul>
                        </div>

                        <h3>Valor Total do Plano</h3>
                        <span>Preço Total: R${item.fullPrice},00</span>
                    </div>
                )
            })}

            {person == 3 && values.map(item => {
                return(
                    <div className="container-values">
                        <h3>Nome dos Beneficiários</h3>
                        <div className="values">
                            <ul>
                                <li>Nome: {item.nameOne}</li>
                                <li>Nome: {item.nameTwo}</li>
                                <li>Nome: {item.nameThree}</li>
                            </ul>
                        </div>

                        <h3>Idade dos Beneficiários</h3>
                        <div className="values">
                            <ul>
                                <li>Idade:{item.ageOne}</li>
                                <li>Idade:{item.ageTwo}</li>
                                <li>Idade:{item.ageThree}</li>
                            </ul>
                        </div>

                        <h3>Plano Escolhido</h3>
                        <div>
                            <span>Plano: {item.selectPlan}</span>
                        </div>

                        <h3>Valor Individual do Plano por Pessoa</h3>
                        <div className="values">
                            <ul>
                                <li>Preço Primeira Pessoa: R${item.priceOne},00</li>
                                <li>Preço Segunda Pessoa: R${item.priceTwo},00</li>
                                <li>Preço Terceira Pessoa: R${item.priceThree},00</li>
                            </ul>
                        </div>

                        <h3>Valor Total do Plano</h3>
                        <span>Preço Total: R${item.fullPrice},00</span>
                    </div>
                )
            })}

            {person == 4 && values.map(item => {
                return(
                    <div className="container-values">
                        <h3>Nome dos Beneficiários</h3>
                        <div className="values">
                            <ul>
                                <li>Nome:{item.nameOne}</li>
                                <li>Nome:{item.nameTwo}</li>
                                <li>Nome:{item.nameTwo}</li>
                                <li>Nome:{item.nameFour}</li>
                            </ul>
                        </div>

                        <h3>Idade dos Beneficiários</h3>
                        <div className="values">
                            <ul>
                                <li>Idade: {item.ageOne}</li>
                                <li>Idade: {item.ageTwo}</li>
                                <li>Idade: {item.ageThree}</li>
                                <li>Idade: {item.ageFour}</li>
                            </ul>
                        </div>

                        <h3>Plano Escolhido</h3>
                        <div>
                            <span>Plano: {item.selectPlan}</span>
                        </div>

                        <h3>Valor Individual do Plano por Pessoa</h3>
                        <div className="values">
                            <ul>
                                <li>Preço Primeira Pessoa: R${item.priceOne},00</li>
                                <li>Preço Segunda Pessoa: R${item.priceTwo},00</li>
                                <li>Preço Terceira Pessoa: R${item.priceThree},00</li>
                                <li>Preço Quarta Pessoa: R${item.priceFour},00</li>
                            </ul>
                        </div>

                        <h3>Valor Total do Plano</h3>
                        <span>Preço Total: R${item.fullPrice},00</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Card