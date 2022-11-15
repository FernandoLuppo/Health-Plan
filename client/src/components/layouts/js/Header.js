//  Hooks
import {Link} from "react-router-dom"

//  Style
import "../css/Header.Module.css"

function Header() {
    return(
        <header>
            <h1>LuppoTW</h1>
            <nav>
                <ul>
                    <li><Link to="/" className="nav-item">Home</Link></li>
                    <li><Link to="/plans" className="nav-item">Contratar Planos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header