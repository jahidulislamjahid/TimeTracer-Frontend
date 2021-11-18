import React from "react";
import { Accordion, Button, Col, Container, FormControl, InputGroup, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../components/Product.js";
import Slider from "../components/Slider.js";
import useProducts from "../hooks/useProducts.js";
import "./../assets/css/home.css";
import collection1 from "./../assets/images/collection/1.jpg";
import collection2 from "./../assets/images/collection/2.jpg";
import collection3 from "./../assets/images/collection/3.jpg";
import collection4 from "./../assets/images/collection/4.jpg";
import Bounce from "react-reveal/Bounce";
import faq from '../assets/images/faq.jpg'
import Testimonials from "../components/Testimonials.js";
const Home = () => {
  const products = useProducts();
  return (
    <div>
      <Slider />
      <Container className="collections my-5 mx-auto">
        <Bounce bottom cascade>
          <h2 className="text-center feature">COLLECTION Of</h2>
        </Bounce>
        <p
          style={{ maxWidth: "650px" }}
          className="text-center mb-2 mx-auto mt-3"
        >
          <Bounce>
            A curated collection of premium wrist watches that will not only tell the time but also extend the beauty of you.
          </Bounce>
        </p>
        <Row className="mx-0">
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img">
              <img className="img-fluid ms-0 ps-0" src={collection1} alt="" />
            </div>
          </Col>
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img img-fluid">
              <img className="img-fluid ms-0 ps-0 h-100" src={collection2} alt="" />
            </div>
          </Col>
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img img-fluid">
              <img className="img-fluid ms-0 ps-0 h-100" src={collection3} alt="" />
            </div>
          </Col>
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img img-fluid">
              <img className="img-fluid ms-0 ps-0 h-100" src={collection4} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Bounce bottom cascade>
          <h2 className="text-center feature">FEATURED WATCHES</h2>
          <p style={{ maxWidth: "650px" }} className="text-center mx-auto mt-3">
            {" "}
            Below you will find our featured watches for you to grab on.
          </p>
        </Bounce>
        {!products.length ? (
          <div className="text-center my-5 private-spinner py-5">
            <Spinner variant="danger" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <h6>Loading...</h6>
          </div>
        ) : (
          <Row>
            {products?.slice(0, 6)?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </Row>
        )}
        <div className="text-center">
          <Link to="/products">
            <button className="btn btn-primary mb-5 mt-3">
              Explore all products
            </button>
          </Link>
        </div>
      </Container>
      <Testimonials />
      <div className="container mt-4">
        <h1 style={{ fontFamily: "cursive" }}>Frequently Asked Questions</h1>
        <Row>
          <Col xs={12} md={6}>
            <img className="w-100" src={faq} alt="" />
          </Col>
          <Col xs={12} md={6} className="pt-5 mt-5 mb-3">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Are These Authentic Products?</Accordion.Header>
                <Accordion.Body>
                  All Our Prioducts Are Genuin & 100% Authentic. There Are Zero Counterfit Products In Our Website.
                  Therefor You Can Purchase Without Any Hesitation.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Do I Get Any Warenty?</Accordion.Header>
                <Accordion.Body>
                  Yes! We Provide Worldwide Official Product Warenty.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Can I Buy Accessories?</Accordion.Header>
                <Accordion.Body>
                  Yes! You Can Buy All Kind Of Watch Accessories Form Us Via Online & Also From Our Outlet Near Your Area.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Can I Extend My Warenty?</Accordion.Header>
                <Accordion.Body>
                  Depending On Products And Manufacturer You Can Extend Your Warenty By Subscribing To Our Membership Program.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </div>
      <div style={{ backgroundColor: "#eeeeee", boxShadow: "(3px 3px 1px rgb(5, 42, 66))", height: "15em", color: "white" }}>
        <h1 style={{ fontFamily: "cursive", paddingTop: "1em", textAlign: "center", color: "black" }}>Subscribe To Our Newslater.</h1>
        <div className="container">
          <InputGroup className="my-3 px-5 ">
            <FormControl
              className="input-newslater"
              style={{ marginLeft: "5em" }}
              placeholder="Your Email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2" style={{ marginRight: "5em", backgroundColor: "black" }} className="input-newslater">
              Subscribe
            </Button>
          </InputGroup>
        </div>

      </div>
    </div>
  );
};

export default Home;
