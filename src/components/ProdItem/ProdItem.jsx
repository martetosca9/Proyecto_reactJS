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
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import ItemQuantitySelector from '../ItemDetail';
import { useContext } from 'react';
import { cartContext }from '../../context/cartContext';
import { useState } from 'react';


export const ProdItem = (props) => {
    const product = props.product;
    const {carrito, addItem} = useContext(cartContext);
    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
        if (quantity != 1)
    setQuantity(prevCount => prevCount - 1);
    }
    const handleIncrement = () => {
        if (quantity < props.product.stock)
    setQuantity(prevCount => prevCount + 1);
    }


    console.log(carrito)
    
    return (
        <div>
            <Col xs={12} xl={4} md={6}>
                <Card className='cardContainer' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                <NavLink to={`/item/${product.id}`}>
                            <Card.Title>{product.serie} {product.memoria}</Card.Title>
                </NavLink>
                            <Card.Text>Price: AR${product.precio}</Card.Text>
                            <ItemQuantitySelector product={product} handleIncrement={handleIncrement} handleDecrement={handleDecrement} quantity={quantity}></ItemQuantitySelector>
                <Button variant="primary" onClick={ () => addItem(product.serie, product.precio, quantity, product.img, product.fabricante)}>Add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
                
        </div>
    );
}