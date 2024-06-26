import React from 'react'
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import "./WebsiteDesigning.css";
import { Footerbaar } from '../Footer/Footerbaar';
function WebsiteDesigning() {
    return (
        <Container>
            <Row className='mt-5'>
                <Col lg={6} md={6} sm={12}>
                    <div className='d-flex justify-content-center'>
                        <img src='https://ml85xkxbvpuq.i.optimole.com/cb:pIqd.8ad3/w:500/h:700/q:mauto/f:avif/https://orbishinfotech.com/wp-content/uploads/2023/04/best-website-designing-company-in-lucknow-orbish-infotech.png' alt='Error' />
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <h2 className='fw-bold'>Best Web Designing Company in Lucknow</h2>
                    <p className='text-light-emphasis'>
                        At valour Infotech, we understand the importance of a well-designed website for
                        businesses of all sizes. A website is often the first point of contact between a business
                        and its potential customers. A well-designed website can create a great first impression,
                        increase user engagement, and drive business growth. We are in Top Web Designing
                        Company in Lucknow.
                    </p>
                    <p className='text-light-emphasis'>
                        We specialize in providing end-to-end web designing solutions that are tailored to meet
                        the unique needs of our clients. Our experienced team of designers works closely with
                        clients to understand their requirements and develop websites that are visually
                        appealing, user-friendly, and optimized for search engines. We are the best Web
                        appealing, user-friendly, and optimized for search engines. We are the best Web
                        Designing Company in Lucknow or the best website designing companies in Lucknow.
                    </p>
                    <p className='text-light-emphasis'>
                        Our web designing process follows a comprehensive approach that includes planning,
                        design, development, testing, and deployment. We use the latest tools and technologies
                        to create websites that are responsive, scalable, and optimized for various devices,
                        platforms, and browsers.
                    </p>
                </Col>
            </Row>
            {/* <Row>
                <h2>
                    Looking for the best web designing company in Lucknow? Look no further than
                    Orbish Infotech. Our experienced team of web designers provides end-to-end web
                    designing solutions that are tailored to meet the unique needs of your business.
                </h2>
                <Button>Enquire Now</Button>
            </Row> */}
            <Row className='mt-5'>
                <Col lg={6} md={6} sm={12}>
                    <Card className='p-2'>
                        <CardBody>
                            <CardTitle tag="h5">Custom web designing</CardTitle>
                            <CardText className='text-light-emphasis'>
                                We provide custom web designing solutions that are tailored to meet the specific needs of our clients. Our team works closely with clients to understand their requirements and create websites that deliver exceptional user experience.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Card className='p-2'>
                        <CardBody>
                            <CardTitle tag="h5">Responsive web designing</CardTitle>
                            <CardText className='text-light-emphasis'>
                                We create responsive websites that are optimized for various devices, platforms, and browsers. Our responsive web designing solutions are designed to enhance user engagement and drive business growth.
                            </CardText>
                        </CardBody>
                    </Card></Col>
            </Row>
            <Row className='mt-3'>
                <Col lg={6} md={6} sm={12}>
                    <Card className='p-2'>
                        <CardBody>
                            <CardTitle tag="h5">
                                E-commerce web designing
                            </CardTitle>
                            <CardText className='text-light-emphasis'>
                                We provide e-commerce web designing solutions that help businesses sell their products and services online. Our e-commerce websites are designed to be secure, user-friendly, and optimized for search engines.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Card className='p-2'>
                        <CardBody>
                            <CardTitle tag="h5">
                                Website redesigning
                            </CardTitle>
                            <CardText className='text-light-emphasis'>
                                We provide website redesigning solutions that help businesses revamp their existing websites to create a fresh and modern look. Our website redesigning solutions are designed to improve user experience, enhance functionality, and increase online visibility.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col>

                    <h4 className='fw-bold text-center'>Why valour Infotech?</h4>
                    <p className='text-light-emphasis'>At valour Infotech, we understand that a well-designed website is crucial for your online presence and business success. That’s why our website developer
                        in Lucknow employs the latest technologies and industry best practices to ensure that your website stands out from the competition.
                    </p>
                    <p className='text-light-emphasis'>
                        In addition to website design, we also offer graphic design services in Lucknow. Our experienced graphic designer in Lucknow can create captivating logos,
                        banners, and other visuals that enhance your brand identity and leave a lasting impact on your audience.
                    </p>
                    <p className='text-light-emphasis'>
                        As a reputable website design company in Lucknow, we prioritize client satisfaction and deliver projects within agreed timelines. Our commitment to
                        excellence has earned us the reputation of being the best website designing company in Lucknow.
                    </p>
                    <p className='text-light-emphasis'>
                        Contact us today to inquire about our web designing course fees in Lucknow.
                    </p>
                    <p className='text-light-emphasis'>
                        When it comes to website designing in Lucknow, valour Infotech is your trusted partner. We are expertise in website design, web development, and graphic
                        design makes us the go-to choice for all your web design needs in Lucknow. Experience the difference between professional website design and contact us
                        for your website design services in Lucknow. Let us help you establish a strong online presence with our unmatched web design services in Lucknow.
                    </p>
                </Col>
            </Row>
            <Footerbaar/>
        </Container>
    );
}
export default WebsiteDesigning;