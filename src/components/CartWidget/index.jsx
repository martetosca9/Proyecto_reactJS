import React from "react";
import { useContext } from 'react';
import { cartContext }from '../../context/cartContext';
export const CartWidget = () => {
    const {carrito} = useContext(cartContext);
    return (
        <div className="bi bi-cart cart">
            <i className="dot"><p className="cartItem">{carrito.length}</p></i>
        </div>
    );
}

export default CartWidget;