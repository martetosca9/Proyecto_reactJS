import React from "react";
import { NavLink } from "react-router-dom";


const thanks = () => {
    return (
        <div className="jumbotron text-center thanks">
        <h1 className="display-3">Thank You!</h1>
        <p className="lead"><strong>Please check your email</strong></p>
        <hr />
        <p>
        <a href="#">Contact us</a>
        </p>
        <p className="lead">
        <NavLink to="/" className={"btn btn-primary btn-sm"}> Continue to homepage</NavLink>
        </p>
    </div>
    )
}

export default thanks;