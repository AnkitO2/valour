import React from "react";
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from "reactstrap";

function Smo() {
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col lg={6} md={12} sm={12}>
                        <div className="d-flex justify-content-center">
                            <img src="https://ml85xkxbvpuq.i.optimole.com/w:500/h:500/q:mauto/f:avif/https://orbishinfotech.com/wp-content/uploads/2023/04/best-smo-company-lucknow-orbish-infotech.png" alt="Error" />
                        </div>
                    </Col>
                    <Col>
                        <h2>
                            “Maximize Your Social Media Reach with valour
                            Infotech – Best SMO Company in Lucknow
                        </h2>
                        <p>At valour Infotech, we believe in creating exceptional social media marketing strategies
                            that help businesses maximize their reach and grow their online presence. Our team of
                            experts specializes in creating customized solutions that cater to the unique needs of
                            each client, ensuring that they get the best results possible
                        </p>
                        <ul>
                            <li>
                                Experienced Team: Our team of experts has years of experience in social media marketing
                                and stays up-to-date with the latest trends and technologies.
                            </li>
                            <li>
                                Customized Solutions: We understand that every business is unique, which is why we
                                create customized solutions tailored to the specific needs of each client.
                            </li>
                            <li>
                                Results-Driven Approach: We focus on delivering results and strive to exceed our clients’
                                expectations.
                            </li>
                            <li>
                                Affordable Prices: We offer our services at competitive prices without compromising on
                                quality
                            </li>
                        </ul>
                    </Col>
                    <h2 className="text-center">
                        At valour Infotech, we understand that every business is unique, which is
                        why we create customized solutions tailored to the specific needs of each
                        client. Our team stays up-to-date with the latest trends and technologies in
                        social media marketing, ensuring that our clients receive the best service
                        possible.
                    </h2>
                </Row>
                <Row className="mt-5">
                    <Col lg={3} md={6} sm={12}>
                        <Card >
                            <CardBody className="text-center">
                                <CardTitle tag="h5">Experienced Team</CardTitle>
                                <CardText>Our team of experts has years of experience in social media marketing and stays up-to-date with the latest trends and technologies.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <Card>
                            <CardBody className="text-center">
                                <CardTitle tag="h5">Customized Solutions</CardTitle>
                                <CardText>
                                    We understand that every business is unique, which is why we create customized solutions tailored to the specific needs of each client.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <Card>
                            <CardBody className="text-center">
                                <CardTitle tag="h5">Results-Driven Approach</CardTitle>
                                <CardText>
                                    We focus on delivering results and strive to exceed our clients’ expectations.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <Card>
                            <CardBody className="text-center">
                                <CardTitle tag="h5">Affordable Prices</CardTitle>
                                <CardText>
                                    We offer our services at competitive prices without compromising on quality
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Smo;