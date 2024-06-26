import { Cloud, Copy, CreditCard, Edit, Globe } from "feather-icons-react/build/IconComponents";
import React from "react";
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardText } from "reactstrap";
import "./WebAppDevlopment.css";
import { Footerbaar } from "../Footer/Footerbaar";
function WebAppDevlopment() {
    return (
        <Container>
            <Row className=" mt-5">
                <Col lg={6} md={6} sm={12}>
                    <div className="d-flex justify-content-center">
                        <img src="https://ml85xkxbvpuq.i.optimole.com/w:500/h:500/q:mauto/f:avif/https://orbishinfotech.com/wp-content/uploads/2023/04/web-app-development-company-lucknow-orbish-infotech.png" alt="Error" />

                    </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <h2>Custom Web App Development Services by
                        valour Infotech
                    </h2>
                    <p className="text-light-emphasis">
                        valour Infotech is a leading software development company specializing in custom
                        web app development services. We have years of experience building custom web
                        applications for a diverse range of clients across different industries. Our team of
                        experienced developers can help you create custom web apps that are tailored to your
                        specific business needs and requirements.
                    </p>
                    <p className="text-light-emphasis">
                        Our custom web app development process is designed to be agile, iterative, and
                        collaborative. We work closely with our clients to understand their business goals,
                        target audience, and technical requirements to create custom web apps that meet their
                        needs. Our team follows industry best practices, including using the latest technology
                        stacks and development methodologies, to ensure that your custom web app is built to
                        the highest quality standards.
                    </p>
                </Col>
            </Row>
            <Row>
                <h2 className="text-center">
                    We are committed to delivering custom web app development services that meet your
                    business needs and exceed your expectations. Contact us today to discuss your custom web
                    app development project with our experts.
                </h2>
                <div className="d-flex justify-content-center">
                    <Button>Enquire Now</Button>

                </div>
            </Row>
            <Row className=" mt-5">
                <Col lg={4} md={4} sm={12}>
                    <Card className="text-center rounded-4 border-5 ">
                        <div className="d-flex justify-content-center mt-2">
                            <Edit size={50} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5">Web App Strategy & Consulting
                            </CardTitle>
                            <CardText className="text-light-emphasis">Our experienced consultants will work with you to understand your business needs and goals, and help you develop a custom web app strategy that aligns with your objectives.</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Card className="text-center border-5 rounded-4">
                        <div className="d-flex justify-content-center mt-2" >
                            <CreditCard size={50} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5">UI/UX Design</CardTitle>
                            <CardText className="text-light-emphasis">valour Infotech design custom user interfaces (UI) and user experience (UX) to create intuitive and engaging web applications that are easy to use.</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Card className="text-center  rounded-4 border-5">
                        <div className="d-flex justify-content-center mt-2">
                            <Copy size={50} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5">Front-End Development</CardTitle>
                            <CardText className="text-light-emphasis">Our front-end developers use the latest web technologies to develop responsive and scalable web apps that work seamlessly across different devices and platforms.

                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col lg={4} md={4} sm={12}>
                    <Card className="text-center  rounded-4 border-5">
                        <div className="d-flex justify-content-center mt-2">
                            <Globe size={50} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5">Back-End Development
                            </CardTitle>
                            <CardText className="text-light-emphasis">
                                Our back-end developers specialize in building custom web app backends using popular programming languages, such as Node.js, Ruby on Rails, and Python.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Card className="text-center  rounded-4 border-5">
                        <div className="d-flex justify-content-center mt-2">
                            <Cloud size={50} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5">Database Design and Development</CardTitle>
                            <CardText className="text-light-emphasis">
                                Our database architects can design and develop custom databases to meet your web app’s specific data storage and retrieval needs. We are committed to delivering custom web app development services.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Card className="text-center  rounded-4 border-5">
                        <div className="d-flex justify-content-center mt-2">
                            <CreditCard size={50} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5">
                                Integration with Third-Party
                                Systems
                            </CardTitle>
                            <CardText className="text-light-emphasis">
                                We can integrate your web app with third-party systems, such as CRMs, ERPs, and Payment Gateways, to enhance its functionality and streamline your business operations.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Footerbaar/>
        </Container>
    );
}

export default WebAppDevlopment;