import React from 'react';
import { Carousel, Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import img1 from './images/tennis1.jpg'
import img2 from './images/home1.jpg'
import img3 from './images/basket2.jpg'
import p1 from './images/p1.jpg'
import p2 from './images/p2.jpg'
import p3 from './images/p3.jpg'
import './CSS/style.css';

function HomePage() {
    
    return (
        <div>
            {/* Hero Carousel */}
            <Header/>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        //src="https://via.placeholder.com/1200x400?text=Sportify+Latest+Gear"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{color:"black"}}>Latest Sports Gear</h3>
                        <p>Gear up for the new season with the latest equipment.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        //src="https://via.placeholder.com/1200x400?text=Exclusive+Deals"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{color:"black"}}>Exclusive Deals</h3>
                        <p>Don't miss out on our special offers and discounts.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{color:"black"}}>New Arrivals</h3>
                        <p>Discover the latest trends in sportswear.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Featured Products */}
            <Container className="my-5">
                <h2 className="text-center mb-4">Featured Products</h2>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={p1} />
                            <Card.Body>
                                <Card.Title>Cricket</Card.Title>
                                <Card.Text>
                                    High-quality sports gear designed for performance.
                                </Card.Text>
                                <Button variant="primary">View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={p2} />
                            <Card.Body>
                                <Card.Title>Badmintion</Card.Title>
                                <Card.Text>
                                    Stay ahead with our latest collection of sportswear.
                                </Card.Text>
                                <Button variant="primary">View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={p3} />
                            <Card.Body>
                                <Card.Title>Football</Card.Title>
                                <Card.Text>
                                    Premium sports accessories to enhance your game.
                                </Card.Text>
                                <Button variant="primary">View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Promo Section */}
            <Container fluid className="bg-dark text-white py-5">
                <Container>
                    <Row>
                        <Col md={8}>
                            <h2><i className='bi bi-google'></i><i className='bi bi-instagram'></i><i className='bi bi-facebook'></i></h2>
                            <p style={{color:"white"}}>Stay updated with the latest news and exclusive offers.</p>
                        </Col>
                        <Col md={4} className="d-flex align-items-center">
                            <Button variant="outline-light" size="lg" block>About Us</Button>
                        </Col>

                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default HomePage;