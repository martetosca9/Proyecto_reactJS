import React from 'react'
import CartProductCard from './CartProductCard';
import { useContext } from 'react';
import { cartContext }from '../../context/cartContext';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const {carrito, RemoveItem} = useContext(cartContext);
    if(carrito.length == 0)
    {return(
        <div>
            <p>El carrito esta vacio</p>
        </div>
    )   
    }else{
    return ( 

    <div className='cartContainer'>
        <div className="row">
        <div className="col-md-8 cart">
          <div className="title"> 
            <div className="row">
              <div className="col"><h4><b>Shopping Cart</b></h4></div>
              <div className="col align-self-center text-right text-muted">{carrito.length} items</div>
            </div>
          </div>    

            {carrito.map(product => {
                return (
                    <div className="row border-top border-bottom">
            <div className="row main align-items-center">
              <div className="col-2"><img className="img-fluid" src={product.imagen} /></div>
              <div className="col">
                <div className="row">{product.fabricante}</div>
                <div className="row text-muted">{product.producto}</div>
              </div>
              <div className="col">
                {product.cantidad}
              </div>
              <div className="col"> ARS$ {product.precio} <button className="close" onClick={() => RemoveItem(product.producto)}>✕</button></div>
            </div>
          </div>
                )
            })}
        </div>
        <div className="col-md-4 checkout">
          <div><h5><b>Summary</b></h5></div>
          <hr />
          <div className="row">
            <div className="col" style={{paddingLeft: 0}}>{carrito.length} items</div>
            <div className="col text-right">AR$ {carrito.reduce((accumulator, currentValue) => accumulator +currentValue.total,
            0)}</div>
          </div>
          <form>
            <p>SHIPPING</p>
            <select><option className="text-muted">Standard-Delivery- ARS$ 1000</option></select>       
          </form>
          <div className="row" style={{borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0'}}>
            <div className="col">TOTAL PRICE</div>
            <div className="col text-right">ARS$ {carrito.reduce((accumulator, currentValue) => accumulator +currentValue.total,
            0) + 1000}</div>
          </div>
          <NavLink to="/Payment" className="btn btn-hover color-5">CHECKOUT</NavLink>
        </div>
      </div>
      </div>
    )}
}

export default Cart; 