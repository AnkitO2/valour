import React from "react";
import { Footerbaar } from "../Footer/Footerbaar";
import "./Training.css"
import { Container, Row, Col, Button } from "reactstrap";

function Training() {
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col lg={8} md={6} sm={12}>
                        <h2 className="text-primary"> Training the way you want </h2>
                        <p className="text-light-emphasis">
                            Valour Infotech Training and certifications offers you the ability to earn credentials to
                            demonstrate your expertise. It is designed to validate your skills and capability to perform role-
                            related tasks and activities at a specified level of competence.
                        </p>
                        <h4>Call us at: +91 6307362399,+91 9305963599 </h4>
                        <div >
                            <Button className="bg-primary">Request for Call</Button>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="d-flex justify-content-center">
                            <img src="https://sigmasoftwares.org/img/trainingcourses.png" alt="Error" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={5} md={12} sm={12}>
                        <div className="d-flex justify-content-center">
                            <img src="https://sigmasoftwares.org/img/training-and-placement.PNG" alt="Error" />
                        </div>
                    </Col>
                    <Col lg={7} md={12} sm={12}>
                        <h4>
                            Learning paths are for you. Take advantage of the
                            training that will prepare you to successfully pass
                            the certification or specialty exam.

                        </h4>
                        <p className="text-light-emphasis">
                            In this era of globalization and free trade, India has to be as competitive as any other country in the world in
                            the areas of technology, quality, cost and service. As such the Software Companies are forced to adopt
                            modern technology and concepts in order to be competitive globally.
                            To surge with the leaps in technology, offers unique & intensive short term courses in Asp.Net, MVC ,
                            Android, iOS that would bring the best in engineering student and software aspirants.


                        </p>
                    </Col>

                </Row>
                <h3>Our Popular Training</h3>
                <Row>
                    <Col lg={3} md={6} sm={12}>
                        <div className="d-flex justify-content-center Image-Size">
                            <img src="https://sigmasoftwares.org/trainingcourses/5.jpg" alt="Error" />

                        </div>
                        <div className="d-flex justify-content-center">
                            <Button type="button" className="bg-primary">Book Slot</Button>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="d-flex justify-content-center Image-Size">
                            <img src="https://sigmasoftwares.org/trainingcourses/6.jpg" alt="Error" />

                        </div>
                        <div className="d-flex justify-content-center">
                            <Button type="button" className="bg-primary">Book Slot</Button>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="d-flex justify-content-center Image-Size">
                            <img src="https://sigmasoftwares.org/trainingcourses/7.jpg" alt="Error" />

                        </div>
                        <div className="d-flex justify-content-center">
                            <Button type="button" className="bg-primary">Book Slot</Button>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="d-flex justify-content-center Image-Size">
                            <img src="https://sigmasoftwares.org/trainingcourses/8.jpg" alt="Error" />

                        </div>
                        <div className="d-flex justify-content-center">
                            <Button type="button" className="bg-primary">Book Slot</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} md={6} sm={12}>
                        <div className="d-flex justify-content-center Image-Size">
                            <img src="https://sigmasoftwares.org/trainingcourses/9.jpg" alt="Error" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <Button type="button" className="bg-primary">Book Slot</Button>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="d-flex justify-content-center Image-Size">
                            <img src="https://sigmasoftwares.org/trainingcourses/10.jpg" alt="Error" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <Button type="button" className="bg-primary">Book Slot</Button>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="d-flex justify-content-center Image-Size">
                            <img src="https://sigmasoftwares.org/trainingcourses/11.jpg" alt="Error" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <Button type="button" className="bg-primary">Book Slot</Button>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="d-flex justify-content-center Image-Size">
                            <img src="https://sigmasoftwares.org/trainingcourses/13.jpg" alt="Error" />

                        </div>
                        <div className="d-flex justify-content-center">
                            <Button type="button" className="bg-primary">Book Slot</Button>
                        </div>
                    </Col>
                </Row>

                <Footerbaar />


            </Container>

        </>

    );
}
export default Training;