import { useState, useEffect } from "react";
import SellerHeader from "./SellerHeader";
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/style.css';
import ProductList from "./Products";

function SellerHome() {
    const [sellerDetails, setSellerDetails] = useState(null);
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Retrieve the userId from localStorage
        const userId = localStorage.getItem('userId');
        //alert(userId);
        const storedSellername = localStorage.getItem('SellerId');
        if (storedSellername) {
            setUsername(storedSellername);
        }


        if (userId) {
            // Fetch seller details from the backend
            fetch(`https://localhost:7072/api/SellerManagement/GetSellerDetails/seller/details/${userId}`)
                .then(response => {
                  //alert("hi")
                    console.log('Response:', response);
                    return response.json();
                })
                .then(data => {
                    //alert("hello")
                    console.log('Parsed JSON:', data);
                    setSellerDetails(data);
                    localStorage.setItem('sellerDetails', JSON.stringify(data));
                    localStorage.setItem("sellerId",data.sellerId);
                    //alert(`Seller Details: ${JSON.stringify(data)}`);
                })
                .catch(error => console.error('Error fetching seller details:', error));
        }
    }, []);

    return (
        <div>
            <SellerHeader />
            <Container className="my-5">
                <h1>Welcome, {username}</h1>
                <h2 className="text-center mb-4">Featured Products</h2>
                
                <ProductList sellerDetails={sellerDetails} />
            </Container>

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

export default SellerHome;