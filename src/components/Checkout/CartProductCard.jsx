import React from "react";

const CartProductCard = ({product}) => {
    
    return (
        <div class="row border-top border-bottom">
            <div class="row main align-items-center">
                <div className="card-body">
                    <div class="col-2">
                    <img className="img-fluid" src={product.imagen} alt="Not found" />
                    </div>
                    <div class="col">
                    <div class="row text-muted">
                    {product.producto}
                    </div>
                        <div class="col">
                        <p>precio: ARS$ {product.precio}</p>
                        <div class="col">
                        <p>cantidad: {product.cantidad}</p>
                        </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProductCard;