import React from "react";
import "./Contactus.css"
import { Footerbaar } from "../Footer/Footerbaar";
import { Container, Form, FormGroup, Input, Label, Row, Col } from "reactstrap";
function Contactus() {
    return (
        <Container>
            <Row className="mt-5">
                <Col>
                    <h4>    Website Feedback</h4>
                    <p className="text-dark-emphasis">
                        We created this form for your feedback and related issues in whatever format it may be. Your
                        suggestions are very much of value to us. We believe in your feedback that can help us to improve
                        our services.
                    </p>

                    <Form className=" shadow p-3 mb-5 bg-body rounded">
                        <div className="d-flex justify-content-between">


                            <FormGroup>
                                <Label for="exampleEmail">
                                    Name
                                </Label>
                                <Input
                                    id="exampleName"
                                    name="name"
                                    placeholder="Enter Name"
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    id="exampleName"
                                    name="name"
                                    placeholder="Enter Email"
                                    type="text"
                                />
                            </FormGroup>

                        </div>
                        <div className="d-flex justify-content-between">



                            <FormGroup>
                                <Label for="exampleMobile">
                                    Mobile Number
                                </Label>
                                <Input
                                    id="examplemobile"
                                    name="name"
                                    placeholder="Enter Mobile No."
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">

                                </Label>
                                <Input
                                    id="exampleSelect"
                                    name="select"
                                    type="select"
                                >
                                    <option>
                                        Software Devlopment
                                    </option>
                                    <option>
                                        Digital Marketing
                                    </option>
                                    <option>
                                        Web Devlopment
                                    </option>
                                    <option>
                                        App Devlopment
                                    </option>
                                    <option>
                                        E-Commers Devlopment
                                    </option>
                                    <option>
                                        App Maintenance
                                    </option>
                                    <option>
                                        Software Testing
                                    </option>
                                    <option>Web App Devlopment</option>
                                    <option>Web Hosting</option>
                                    <option>Web Redesign</option>
                                </Input>
                            </FormGroup>
                        </div>
                    </Form>

                </Col>
                <Col>
                    <div className="bg-primary p-5">
                        <h4 className="text-black">Contact Information</h4>
                        <p className="text-white">
                            We appreciate your visit and your interest in our services. Please fill out and submit the form
                            below. Our representative will contact you shortly to discuss your technical requirements.
                        </p>
                        <h5 className="text-black">OFFICE ADDRESS</h5>
                        <p className="text-white">Regd.off.HN 42-A Ran Ashrey Purwa ,Khargapur,Gomtinagar,Lucknow-226010 Uttar Pradesh</p>
                        <h6 className="text-black">Email</h6>
                        <p className="text-white">emailvalour@rediffmail.com</p>
                        <h6 className="text-black">Mobile No.</h6>
                        <p className="text-black">+91 6307362399</p>
                    </div>
                </Col>
            </Row>
            <Footerbaar />
        </Container>
    );
}
export default Contactus;