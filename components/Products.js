import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the product data from the API
    fetch('http://localhost:8080/sellerproduct/getallsellerproducts')
      .then(response => response.json())
      .then(data => {
        //alert(JSON.stringify(data));
        console.log('Fetched products:', data); // Log the fetched data
        setProducts(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <Container>
      <Row>
        {products.map(product => (
          <Col key={product.seller_product_id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              {product.image1 && (
                <Card.Img
                  variant="top"
                  src={`data:image/jpeg;base64,${product.image1}`} 
                  alt="Product Image"
                  style={{ maxWidth: '100%', height: 'auto' }} 
                />
              )}
              <Card.Body>
                <Card.Title>
                  {product.brand?.brand_name || 'Brand Name'} - {product.product1?.name || 'Product Name'}
                </Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
                <Card.Text>
                  Price: Rs.{product.price}
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;