// "id": 0,
//       "fabricante": "Grafica Nvidia",
//       "modelo": "Ventus",
//       "stock": 4,
//       "serie": "GTX 1650",
//       "memoria": "4GB de vram",
//       "precio": 68000,
//       "img": "img/gtx1650.jpg",
//       "cantidad": 1,
//       "categoria": "grafica"

import { useParams } from "react-router-dom";
import products from "../../products.json";
import Button from 'react-bootstrap/Button';
import ItemQuantitySelector from "../ItemDetail";

export const ItemDetailContainer = () => {
    const {prodID} = useParams();
    const product = products.find(product => product.id === parseInt(prodID))
    console.log(product)
    console.log(prodID)
    return (
        <div className="detailsContainer">
            <div className="details">
                
                <img src={product.img}/>
                <h2>Name: {product?.serie}</h2>
                <p>Details: {product?.fabricante} | {product?.modelo}</p>
                <p>Price: AR${product?.precio}</p>
                <ItemQuantitySelector product={product}></ItemQuantitySelector>
                <Button variant="primary">Add to cart</Button>

            </div>
        </div>
    );
}

export default ItemDetailContainer;