import { User } from "feather-icons-react/build/IconComponents";
import CheckSquare from "feather-icons-react/build/IconComponents/CheckSquare";
import HardDrive from "feather-icons-react/build/IconComponents/HardDrive";
import RefreshCw from "feather-icons-react/build/IconComponents/RefreshCw";
import Tool from "feather-icons-react/build/IconComponents/Tool";
import React from "react"
import "./AppMaintenance.css";
import { Footerbaar } from "../Footer/Footerbaar";
import { Container, Row, Col, Card, CardBody, CardText, CardTitle } from "reactstrap";

function AppMaintenance() {
    return (
        <Container>
            <Row className="mt-5">
                <Col lg={6} md={12} sm={12}>
                    <div className="d-flex justify-content-center">
                        <img src="https://ml85xkxbvpuq.i.optimole.com/w:500/h:500/q:mauto/f:avif/https://orbishinfotech.com/wp-content/uploads/2023/04/app-maintenance-company-lucknow-orbish-infotech.png" alt="Error" />

                    </div>
                </Col>
                <Col lg={6} md={12} sm={12}>
                    <h2>
                        Mobile app maintenance service  | valour
                        Infotech
                    </h2>
                    <p className="text-light-emphasis">
                        At valour Infotech, we understand that maintaining your mobile and web applications
                        is crucial for ensuring their performance and stability. That’s why we offer reliable app
                        maintenance services to our clients. Our app maintenance services cover a wide range
                        of tasks, including bug fixing, code optimization, security updates, and more.
                    </p>
                    <p className="text-light-emphasis">
                        Our experienced team of app maintenance experts has extensive knowledge of various
                        platforms and technologies, including iOS, Android, web, and hybrid apps. We follow
                        best practices in app maintenance to ensure that your applications continue to function
                        smoothly and efficiently. Our app maintenance services are tailored to meet your
                        specific requirements and ensure that your apps remain up-to-date with the latest
                        technologies and trends.
                    </p>
                    <p className="text-light-emphasis">
                        Bug fixing is one of our core offerings, which helps to identify and resolve any issues
                        with your application. We use advanced tools and techniques to identify bugs and fix
                        them quickly and efficiently. This allows your users to have a seamless experience with
                        your app and reduces the chances of negative reviews and feedback.
                    </p>
                </Col>
            </Row>
            <Row className="text-center">
                <Col lg={12} md={12} sm={12}>
                    <h2 className="text-center">
                        valour Infotech is a reliable app maintenance company that offers
                        comprehensive app maintenance services to ensure the performance and
                        stability of your mobile and web applications. Contact us to learn how we
                        can help you with your app maintenance needs.
                    </h2>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col lg={4} md={12} sm={12}>
                    <Card className="text-center border-5 rounded-4">
                        <div className="d-flex justify-content-center mt-2">
                            <CheckSquare size={50} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5">
                                Bug Fixing
                            </CardTitle>
                            <CardText className="text-light-emphasis">
                                Our team of experts uses advanced tools and techniques to identify and resolve any bugs in your application. This helps to ensure that your users have a seamless experience with your app.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4} md={12} sm={12}>
                    <Card className="text-center border-5 rounded-4">
                        <div className="d-flex justify-content-center mt-2">
                            <RefreshCw size={50} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5">
                                Code Optimization
                            </CardTitle>
                            <CardText className="text-light-emphasis">
                                We  identify areas that can be optimized for better performance and speed. This is particularly important for apps that have high traffic and require fast loading times.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4} md={12} sm={12}>
                    <Card className="text-center border-5 rounded-4">
                        <div className="d-flex justify-content-center mt-2">
                            <HardDrive size={50} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5">Security Updates</CardTitle>
                            <CardText className="text-light-emphasis">
                                Our valour Infotech security experts identify and fix any potential security vulnerabilities to ensure that your app is secure and protected from potential threats.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col lg={4} md={12} sm={12}>
                    <Card className="text-center border-5 rounded-4">

                        <div className="d-flex justify-content-center mt-2">
                            <Tool size={50} />

                        </div>
                        <CardBody>
                            <CardTitle tag="h5">
                                Performance Tuning
                            </CardTitle>
                            <CardText className="text-light-emphasis">
                                We continually monitor your app’s performance to identify any issues and optimize its performance to meet your business requirements.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4} md={12} sm={12}>
                    <Card className="text-center border-5 rounded-4">
                        <div className="d-flex justify-content-center mt-2">
                            <RefreshCw size={50} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5">
                                Compatibility Testing
                            </CardTitle>
                            <CardText className="text-light-emphasis">
                                We ensure that your app is compatible with the latest devices and operating systems to ensure that it continues to function smoothly.


                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4} md={12} sm={12}>
                    <Card className="text-center border-5 rounded-4">
                        <div className="d-flex justify-content-center mt-2">
                            <User size={50} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5">
                                Technical Support
                            </CardTitle>
                            <CardText className="text-light-emphasis">
                                Our support team is always available to provide you with technical assistance and resolve any issues that you may encounter with your app.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Footerbaar/>
        </Container>
    );
}
export default AppMaintenance