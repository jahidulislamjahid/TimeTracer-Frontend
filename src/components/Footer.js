import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./../assets/css/footer.css";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.svg';
import payment from '../assets/images/payment.png';

const Footer = () => {
  return (
    <>
      <div className="bg-primary mx-0 px-0">
        <Container>
          <Row className="pt-3 text-center">
            <Col xs={12} md={3}>
              <img
                src={logo}
                width="160"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              <p className="text-white"><i class="fas fa-map-marker-alt"></i> Shop 41/2 Level 6 Block D <br /> Motalib Tower <br /> Dhaka, Bangladesh</p>
              <div className="d-flex mt-3 ms-5">
                <h3 className="text-white px-2 social-icons"><i class="fab fa-facebook-f"></i></h3>
                <h3 className="text-white px-2 social-icons"><i class="fab fa-twitter"></i></h3>
                <h3 className="text-white px-2 social-icons"><i class="fab fa-instagram"></i></h3>
                <h3 className="text-white px-2 social-icons"><i class="fab fa-youtube"></i></h3>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <ul>
                <li><Link to="/home" className="text-white">Home</Link></li>
                <li><Link to="/products" className="text-white">Products</Link></li>
                <li><Link to="/dashboard" className="text-white">Dashboard</Link></li>
                <li><Link to="/login" className="text-white">Login</Link></li>
                <li><Link to="/contact" className="text-white">Contact</Link></li>
              </ul>
            </Col>
            <Col xs={12} md={3}>
              <div className="text-center">
                <h4 className="text-white">Download Our App</h4>
                <button className="border rounded-pill fs-4 px-2 app-button text-white"><i class="fab fa-google-play me-3"></i>Playstore</button>
                <h4></h4>
                <button className="border rounded-pill fs-4 px-2 bg-black text-white app-button"><i class="fab fa-app-store me-3"></i>Appstore</button>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <img src={payment} alt="payment picture" className="w-100 mt-3" />
            </Col>
          </Row>
          <p className="text-white text-center py-3 m-0">Copyright &copy; Restricted By Time Tracer 1997-{new Date().getFullYear()}.</p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
