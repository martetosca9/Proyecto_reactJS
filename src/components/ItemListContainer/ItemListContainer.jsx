import React from "react";
import { ProdItem } from "../ProdItem/ProdItem";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams } from "react-router-dom";
import products from "../../products.json"
import SearchBar from "../SearchBar"
import { useState } from "react";

export const ItemListContainer = ({greeting}) => {
    const {id, search} = useParams();
    console.log((search ? products.filter(product => `${product.fabricante} ${product.serie}`.toUpperCase().includes(search.toUpperCase())) : products));

    const filteredProducts = id ? products.filter(product => product.categoria === id) : (search ? products.filter(product => `${product.fabricante} ${product.serie}`.toUpperCase().includes(search.toUpperCase())) : products);
    
    return (
        <Container>
        <h1>{greeting}</h1>

            <SearchBar search={search}></SearchBar>
        <Row>
            {filteredProducts.map((product) => 
                <ProdItem product={product} key={product.id}/>
            )}
        </Row>

        </Container>
    );
}
