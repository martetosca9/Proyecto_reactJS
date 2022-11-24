import React from "react";
import { ProdItem } from "../ProdItem/ProdItem";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams } from "react-router-dom";
import products from "../../products.json"

export const ItemListContainer = ({greeting}) => {
    const {id} = useParams();
        
    const filteredProducts = id ? products.filter(product => product.categoria === id) : products;

    return (
        <Container>
        <h1>{greeting}</h1>

        <Row>
            {filteredProducts.map((product) => 
                <ProdItem product={product} key={product.id}/>
            )}
        </Row>

        </Container>
    );
}
