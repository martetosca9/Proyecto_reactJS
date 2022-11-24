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

export const ProdItem = (props) => {
    const product = props.product;

    return (
        <NavLink to={`/item/${product.id}`}>
        <Col xs={12} xl={4} md={6}>
            <Card className='cardContainer' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.serie} {product.memoria}</Card.Title>
                    <Card.Text>Price: AR${product.precio}</Card.Text>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </Col>
        </NavLink>
    );
}