import "./bootstrap.min.css"
import CartWidget from "../CartWidget"

export const NavBar = () => {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarTogglerDemo01">

        <a className="navbar-brand" href="#">T&T</a>

        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">Shop</a>
            </li>

            <li className="nav-item">
                <li className="nav-link categories"><a className="nav-link" href="#">Categories</a> 

                    <ul id="menu">
                        <li><a className="nav-link" href="#">GPUs</a></li>
                        <li><a className="nav-link" href="#">CPUs</a></li>
                    </ul>
                
                </li>
            </li>
            
            <li className="nav-item">
                <a className="nav-link">
                    <CartWidget/>
                </a>
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