import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/sellerproduct/getallsellerproducts')
            .then(response => response.json())
            .then(data => {setProducts(data); alert("hello")})
            .catch(error => {console.error('Error fetching products:', error); alert("error")});
    }, []);

    return (
        <Container className="mt-5">
            <Row>
                {products.map(product => (
                    <Col sm={12} md={6} lg={4} key={product.seller_product_id} className="mb-4">
                        <Card>
                            {/*<Card.Img variant="top" src={`data:image/jpeg;base64,${product.image1}`} alt={product.product1.product_name} />*/}
                            <Card.Body>
                                <Card.Title>{product.product1.product_name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Brand: {product.product1.brand.brand_name}</Card.Subtitle>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text>Price: ${product.price}</Card.Text>
                                <Card.Text>Quantity: {product.quantity}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductList;