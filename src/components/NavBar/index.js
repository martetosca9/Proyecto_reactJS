import "./bootstrap.min.css"
import CartWidget from "../CartWidget"
import { NavLink } from "react-router-dom"

export const NavBar = () => {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarTogglerDemo01">

        <NavLink className="navbar-brand" to="/">T&T</NavLink>

        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

            <li className="nav-link categories">
                Categories

                    <div id="menu">
                        <NavLink className="nav-link" to={`/category/grafica` }>GPUs</NavLink>
                        <NavLink className="nav-link" to={`/category/procesador` }>CPUs</NavLink>
                    </div>
                
            </li>
            
            <li className="nav-item">
                <NavLink className="nav-link">
                    <CartWidget/>
                </NavLink>
            </li>

        </ul>
        
        

        <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
    </nav>
            </header>
        )
    }