import React from "react";
import { Button, Card, CardBody, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import "./Ecommerse.css"
import { Footerbaar } from "../Footer/Footerbaar";
function Ecommerse() {
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col lg={6} md={12} sm={12}>
                        <div className="d-flex justify-content-center">
                            <img src="https://ml85xkxbvpuq.i.optimole.com/w:500/h:500/q:mauto/f:avif/https://orbishinfotech.com/wp-content/uploads/2023/04/top-ecommerce-software-development-company-lucknow-orbish-infotech.png" alt="Error" />

                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <h2>
                            Custom e-commerce store development | valour
                            Infotech
                        </h2>
                        <p className="text-light-emphasis">
                            In today’s digital age, having a strong online presence is essential for the success of any
                            e-commerce business. At valour Infotech, we offer expert software development
                            services to help you build your dream e-commerce store. Our experienced team of
                            developers has a proven track record of delivering high-quality e-commerce solutions
                            that are tailored to meet the unique needs of each of our clients.
                        </p>
                        <p className="text-light-emphasis">
                            We understand that each e-commerce business has different requirements and
                            objectives, which is why we offer customized software development services to ensure
                            that your e-commerce store stands out from the competition. Our team of developers
                            has expertise in a wide range of technologies and platforms, including Magento, Shopify,
                            WooCommerce, and more.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg={12} md={12} sm={12}>
                        <h2>We are committed to delivering high-quality e-commerce software
                            development services to help you build a strong online presence and drive
                            growth for your business. Contact us today to learn more about how we can
                            help you build your dream e-commerce store.
                        </h2>
                        <div className="d-flex justify-content-center">
                            <Button>Enquire Now</Button>

                        </div>
                    </Col>

                </Row>
                <Row className="mt-5">
                    <Col lg={4} md={12} sm={12}>
                        <Card className="text-center">
                            <CardBody>
                                <CardTitle tag="h5">Custom E-commerce Store Development</CardTitle>
                                <CardText className="text-light-emphasis">
                                    We build custom e-commerce stores that are tailored to meet the unique needs of your business, including design, functionality . </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <Card className="text-center">
                            <CardBody>
                                <CardTitle tag="h5">E-commerce Website Design</CardTitle>
                                <CardText className="text-light-emphasis">
                                    We design beautiful and responsive e-commerce websites that are optimized for a seamless user experience.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <Card className="text-center">
                            <CardBody>
                                <CardTitle tag="h5">Payment Gateway Integration</CardTitle>
                                <CardText className="text-light-emphasis">
                                    We integrate payment gateways into your e-commerce store, making it easy for your customers to make purchases online.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col lg={4} md={12} sm={12}>
                        <Card className="text-center">
                            <CardBody>
                                <CardTitle tag="h5">Mobile App Development</CardTitle>
                                <CardText className="text-light-emphasis">
                                    We develop mobile apps for your e-commerce store, allowing your customers to browse and purchase products on-the-go.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <Card className="text-center">
                            <CardBody>
                                <CardTitle tag="h5">E-commerce SEO</CardTitle>
                                <CardText className="text-light-emphasis">0
                                    We optimize your e-commerce store for search engines, making it easier for potential customers to find your products and services online.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>

                    </Col>
                </Row>
                <Footerbaar/>
            </Container>
        </>
    )
}
export default Ecommerse;