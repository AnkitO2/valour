import React from "react";
import { Container, Row, Col } from "reactstrap";
import '../Resources./Technologies.css'
function Technologies() {
    return (
        <>
            <Container className="App mt-5">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className="d-flex justify-content-center">
                            <img src="https://ml85xkxbvpuq.i.optimole.com/w:570/h:570/q:mauto/f:avif/https://orbishinfotech.com/wp-content/uploads/2023/06/web-development-lucknow-1.png" alt="Error" />
                        </div>

                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <h4>Latest Technology  & Leading software company</h4>
                        <p>
                            valour Infotech is a leading software company & custom software development
                            company in Lucknow that provides cutting-edge software development services using a
                            variety of technologies including .NET, MVC, WordPress, React, Android, HTML, and
                            CSS. Our team of experienced developers in Lucknow has expertise in developing
                            custom software applications that are tailored to your specific needs, helping your
                            business achieve success.
                        </p>
                        <p>
                            Our .NET developers in Lucknow and leading software company are proficient in
                            building scalable, robust, and secure software applications using .NET technology.
                            valour Infotech experts use the latest technology and use MVC framework to develop
                            web applications that are responsive and user-friendly. Our WordPress developers in
                            Lucknow create bespoke WordPress websites that are designed to enhance your online
                            presence and attract more customers.
                        </p>
                        <h4>Leading Software Company</h4>
                        <p>
                            Our Android developers in valour Infotech Lucknow create high-quality, feature-rich
                            Android applications that are optimized for performance and user experience in dailly
                            life, We use HTML and CSS to build responsive website design and mobile-friendly
                            websites that adapt to different screen sizes and devices.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Technologies;
