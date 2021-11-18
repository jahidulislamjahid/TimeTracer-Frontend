import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import bg from '../assets/images/bgCover.png'

const Contact = () => {
    return (
        <div style={{ height: "100vh" }} className="container">
            <h1 className="fw-5 pt-4 fw-bold text-center">Contact Us</h1>
            <hr />
            <Row>
                <Col xs={12} md={6} className="ps-5">
                    <div className="container pt-5">
                        <Row className="pb-4">
                            <Col>
                                <div className="d-flex gap-3">
                                    <h2 className="text-primary mt-2 fs-1"><i class="fas fa-location-arrow"></i></h2>
                                    <div>
                                        <h3 className="fw-bold">Location:</h3>
                                        <h5>41/2 Motalib Tower, Dhaka</h5>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="pb-4">
                            <Col>
                                <div className="d-flex gap-3">
                                    <h2 className="text-primary mt-2 fs-1"><i class="fas fa-envelope"></i></h2>
                                    <div>
                                        <h3 className="fw-bold">E-mail:</h3>
                                        <h5>support@time.tracer</h5>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="d-flex gap-3">
                                    <h2 className="text-primary mt-2 fs-1"><i class="fas fa-phone-alt"></i></h2>
                                    <div>
                                        <h3 className="fw-bold">Phone:</h3>
                                        <h5>01511223344</h5>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={6} className="pe-5">
                    <div>
                        <Form className="pt-5 px-5">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Your Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                                <Form.Control as="textarea" rows={3} placeholder="Message" />
                            </Form.Group>
                            <Button className="px-4">Send Message</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div >
    );
};

export default Contact;