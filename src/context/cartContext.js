import React from "react";
import { useState } from "react";
// import { Button } from "react-bootstrap";


export const cartContext = React.createContext([]);
// const [quantity, setQuantity] = useState(1);

const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    
    const addItem = (producto, precio, cantidad, imagen, fabricante) => {
        if(!isInCart(producto))
            setCarrito([...carrito, {producto: producto, precio: precio, cantidad: cantidad, imagen: imagen, fabricante: fabricante, total: precio * cantidad}])
    }
    const RemoveItem = (producto) => {
            const pos = carrito.findIndex(product => product.producto === producto);
            const aux = [...carrito];
            aux.splice(pos, 1);
            setCarrito([...aux]);

    }
    const isInCart = (item) => {
        if(carrito.find(product => product.producto === item))
        return true
        else return false;
    }

    return (
        <cartContext.Provider value={{carrito, addItem, RemoveItem}}> {children} </cartContext.Provider>
    )
}

export default CartProvider;