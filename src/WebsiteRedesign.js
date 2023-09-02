import React from "react";
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardText } from "reactstrap";

function WebsiteRedesign() {
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center">
                    <img src="https://ml85xkxbvpuq.i.optimole.com/w:878/h:576/q:mauto/f:avif/https://orbishinfotech.com/wp-content/uploads/2023/04/website-redesign-company-orbish-infotech.png" alt="Error" />
                </Col>
                <Col>
                    <h2>
                        Website Redesigning Services by valour
                        Infotech
                    </h2>
                    <p>
                        At valour Infotech, we understand the importance of having a visually appealing and
                        user-friendly website. A well-designed website not only helps in enhancing your brand
                        image but also plays a crucial role in driving traffic and generating leads. If you feel that
                        your website is outdated, unresponsive or not delivering the desired results, it's time for
                        a revamp.
                    </p>
                    <p>
                        Our website redesigning services are aimed at giving your website a fresh new look and
                        feel, while also improving its functionality, navigation, and user experience. Whether
                        you need a complete website overhaul or just a few tweaks, our expert designers and
                        developers will work closely with you to understand your requirements and deliver a
                        solution that meets your goals.
                    </p>
                    <p>
                        Our website redesigning services are aimed at giving your website a fresh new look and
                        feel, while also improving its functionality, navigation, and user experience. Whether
                        you need a complete website overhaul or just a few tweaks, our expert designers and
                        developers will work closely with you to understand your requirements and deliver a
                        solution that meets your goals.
                    </p>
                </Col>
            </Row>
            <div className="bg-primary">
                <h2 className="text-center text-white p-3">If you're ready to transform your website, contact us today to learn more about our website redesigning
                    services. Let's work together to create a website that will drive results and enhance your brand's online
                    presence.
                </h2>
                <Button>Enquire Now</Button>
            </div>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Consultation</CardTitle>
                            <CardText>
                                Our team will begin by understanding your business, target audience, and website goals. We’ll also assess your current website’s strengths and weaknesses and provide you with an analysis report.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Design</CardTitle>
                            <CardText>Our team of creative designers will create wireframes and prototypes that align with your vision and branding. We’ll ensure that your new website is visually appealing, user-friendly, and optimized for all devices.</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Development</CardTitle>
                            <CardText>
                                Our team of experienced developers will bring your new website to life, ensuring that it’s fast, secure, and easy to manage. We’ll also ensure that it’s SEO-friendly and meets all the latest web standards and guidelines.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle>Testing</CardTitle>
                            <CardText>
                                Before the launch, we’ll thoroughly test your new website for performance, functionality, and compatibility across all devices and browsers.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default WebsiteRedesign;