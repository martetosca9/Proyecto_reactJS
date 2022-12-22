import { useState } from "react";


const ItemQuantitySelector = (props) => {

    return (
        <div className="input-group">
            <button type="button" onClick={props.handleDecrement} className="input-group-text">-</button>
            <div className="form-control text-center">{props.quantity}</div>
            <button type="button" onClick={props.handleIncrement} className="input-group-text">+</button>
        </div>
    )
}

export default ItemQuantitySelector;