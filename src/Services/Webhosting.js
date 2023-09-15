import { FileText, Globe, Monitor, PlusCircle, RefreshCw, Tool } from "feather-icons-react/build/IconComponents";
import React from "react";
import "./Webhosting.css";
import { Button, Card, CardBody, CardText, CardTitle, Container, Row, Col } from "reactstrap";
function Webhosting() {
    return (
        <Container>
            <Row className="mt-5">
                <Col lg={6} md={12} sm={12}>
                    <div className="d-flex justify-content-center">
                        <img src="https://ml85xkxbvpuq.i.optimole.com/w:500/h:500/q:mauto/f:avif/https://orbishinfotech.com/wp-content/uploads/2023/04/Web-Hosting-services-in-lucknow-orbish-infotech.png" alt="Error" />

                    </div>
                </Col>
                <Col lg={6} md={12} sm={12}>
                    <h2>Fast & Reliable Web Hosting Services</h2>
                    <p className="text-light-emphasis">
                        When it comes to launching a website, choosing a reliable web hosting provider is one
                        of the most critical decisions you’ll make. A good web host can make all the difference in
                        terms of website speed, security, and uptime, ensuring that your website is always
                        available and accessible to your visitors.
                    </p>
                    <p className="text-light-emphasis">
                        At valour Infotech Lucknow, we understand the importance of high-quality web
                        hosting services. That’s why we offer a range of web hosting plans to meet the needs of
                        businesses and individuals of all sizes. Our hosting plans come with features like
                        unlimited bandwidth, email accounts, and databases, as well as 24/7 support to ensure
                        that you always have someone to turn to if you need assistance.
                    </p>
                    <p className="text-light-emphasis">
                        We use the latest technology to ensure that our hosting services are fast, secure, and
                        reliable. Our servers are located in world-class data centers with redundant power and
                        cooling systems, as well as multiple layers of security to protect your data from threats
                        like malware and hacking attempts.
                    </p>
                </Col>
            </Row>
            <>
                <div className="bg-primary p-3">
                    <h2>We're here to help you every step of the way, from selecting the right
                        hosting plan to troubleshooting any issues that may arise. Contact us today
                        to learn more about our web hosting services and how we can help you
                        take your website to the next level.
                    </h2>
                    <div className="d-flex justify-content-center">
                        <Button >Enquire Now</Button>

                    </div>
                </div>
            </>
            <Row className="p-2 mt-5">
                <Col lg={4} md={4} sm={12}>
                    <Card className="border border-5">
                        <div className="d-flex justify-content-center mt-2">
                            <RefreshCw size={50} />
                        </div>
                        <CardBody className="text-center">
                            <CardTitle tag="h5">Scalability</CardTitle>
                            <CardText className="text-light-emphasis">
                                valour Infotech may require a web hosting solution that can easily scale as their business grows. This can include the ability to upgrade server resources, add more storage space, and handle more website traffic.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Card className="border border-5">
                        <div className="d-flex justify-content-center mt-2">
                            <PlusCircle size={50} />
                        </div>

                        <CardBody className="text-center">
                            <CardTitle tag="h5">Security</CardTitle>
                            <CardText className="text-light-emphasis">
                                As a software company, Orbish Infotech must prioritize security. Look for web hosting providers that offer advanced security features, such as SSL certificates, DDoS protection, and regular data backups.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Card className="border border-5">
                        <div className="d-flex justify-content-center mt-2">
                            <Globe size={50} />
                        </div>
                        <CardBody className="text-center">
                            <CardTitle tag="h5">Server uptime</CardTitle>
                            <CardText className="text-light-emphasis">For a software company, downtime can result in lost revenue and decreased customer satisfaction. Choose a web hosting provider with a high uptime guarantee, such as 99.9% uptime or higher.</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="p-2 mt-1">
                <Col lg={4} md={4} sm={12}>
                    <Card className="border border-5">
                        <div className="d-flex justify-content-center mt-2">
                            <Monitor size={50} />
                        </div>
                        <CardBody className="text-center">
                            <CardTitle tag="h5">Flexibility</CardTitle>
                            <CardText className="text-light-emphasis">
                                valour Infotech may require a web hosting solution that allows for custom configurations, including the ability to install and run specific software and applications.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Card className="border border-5">
                        <div className="d-flex justify-content-center mt-2">
                            <Tool size={50} />
                        </div>
                        <CardBody className="text-center">
                            <CardTitle tag="h5">Technical support</CardTitle>
                            <CardText className="text-light-emphasis">Technical issues can arise at any time, so it's important to choose a web hosting provider with responsive and knowledgeable technical support. 24/7 support via phone, email, or live chat.</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Card className="border border-5">
                        <div className="d-flex justify-content-center mt-2">
                            <FileText size={50} />
                        </div>
                        <CardBody className="text-center">
                            <CardTitle tag="h5">Bandwidth and storage</CardTitle>
                            <CardText className="text-light-emphasis">
                                As a software company, valour Infotech may require a significant amount of storage space and bandwidth to store and transfer large files, such as software updates or client data.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default Webhosting;