import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./SoftwareTesting.css";

function SoftwareTesting() {
    return (
        <Container>
            <Row className="mt-5">
                <Col lg={6} md={12} sm={12}>
                    <h2>Software testing solutions | valour Infotech</h2>
                    <p className="text-light-emphasis">
                        At valour Infotech, we understand the importance of software testing in ensuring the
                        quality and reliability of your software. That’s why we offer comprehensive software
                        testing services to our clients. Our software testing solutions cover a wide range of
                        testing types, including automated testing, performance testing, security testing, and
                        more.
                    </p>
                    <p className="text-light-emphasis">
                        Our experienced team of software testing consultants follows best practices in
                        software testing to deliver high-quality results. We use the latest tools and techniques
                        to ensure that your software meets the required specifications and standards. Our end-
                        to-end testing services include test planning and strategy, test case development, test
                        execution and reporting, and continuous testing.
                    </p>
                    <p className="text-light-emphasis">
                        Automated software testing is one of our core offerings, which helps to save time and
                        effort in the long run. We use advanced software testing tools to automate the testing
                        process and identify defects and bugs early in the development cycle. This allows our
                        clients to deliver high-quality software faster and with greater efficiency.
                    </p>
                </Col>
                <Col lg={6} md={12} sm={12}>
                    <div className="d-flex justify-content-center">
                        <img src="https://ml85xkxbvpuq.i.optimole.com/w:500/h:500/q:mauto/f:avif/https://orbishinfotech.com/wp-content/uploads/2023/04/software-testing-company-lucknow-orbish-infotech.png" alt="Error" />

                    </div>
                </Col>
            </Row>
            <Row className="bg-primary mt-5">
                <h2 className="text-center">
                    valour Infotech is a reliable software testing company that offers
                    comprehensive testing solutions and services to ensure the quality and
                    reliability of your software. Contact us to learn how we can help you
                    end-to-end testing services and consulting.
                </h2>
                <div className="d-flex justify-content-center">
                    <Button className="bg-dark text-white" color="dark">Enquire Now</Button>

                </div>
            </Row>
        </Container>
    );
}
export default SoftwareTesting;