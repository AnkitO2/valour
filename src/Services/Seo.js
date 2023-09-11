import { Navigation } from "feather-icons-react/build/IconComponents";
import Edit from "feather-icons-react/build/IconComponents/Edit";
import MousePointer from "feather-icons-react/build/IconComponents/MousePointer";
import Search from "feather-icons-react/build/IconComponents/Search";
import React from "react";
import { Button, Card, CardBody, CardText, CardTitle, Container, Row, Col } from "reactstrap";

function Seo() {
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col lg={6} md={12} sm={12}>
                        <div className="d-flex justify-content-center">
                            <img src="https://ml85xkxbvpuq.i.optimole.com/w:600/h:600/q:mauto/f:avif/https://orbishinfotech.com/wp-content/uploads/2023/04/seo-company-lucknow-orbish-infotech.png" alt="Error" />

                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <h2>SEO company in Lucknow | valour Infotech</h2>
                        <p>Our SEO services are designed to help you achieve higher rankings in search engine
                            results pages (SERPs) and attract more organic traffic to your website.
                        </p>
                        <p>
                            If you’re looking for an SEO company in Lucknow, you’ve come to the right place. At
                            valour Infotech, we specialize in providing customized SEO solutions to businesses of
                            all sizes and industries. Our team of experts has years of experience working with
                            businesses in Lucknow and beyond, helping them achieve their online marketing goals
                            and grow their business
                        </p>
                        <p>
                            We conduct thorough keyword research to identify the most relevant and profitable
                            keywords for your business. This helps us optimize your website’s content and metadata
                            to rank higher in search engine results pages and attract more organic traffic to your
                            website.
                        </p>
                        <p>
                            We optimize your website’s on-page elements, such as title tags, meta descriptions,
                            header tags, and content, to improve your website’s relevancy and authority in the eyes
                            of search engines. This helps to improve your website’s visibility and rankings in search
                            results pages.
                        </p>
                        <p>
                            We believe in building long-term relationships with our clients based on trust and
                            transparency. We work closely with you to understand your business, your goals, and
                            your target audience, and we provide regular updates and communication to ensure
                            that you’re always informed and satisfied with our services.
                        </p>
                    </Col>
                </Row>
                <div className="mt-5">
                    <h3>
                        At valour Infotech, we're committed to delivering the highest quality SEO
                        services to businesses in Lucknow and beyond. Contact us today to learn
                        more about how we can help you achieve your online marketing goals and
                        grow your business.
                    </h3>
                    <div className="d-flex justify-content-center">
                        <Button>Enquire Now</Button>

                    </div>
                </div>
                <Row className="mt-5">
                    <Col lg={4} md={12} sm={12}>
                        <Card className="text-center border-5 rounded-4">
                            <div className="d-flex justify-content-center">
                                <MousePointer size="50" />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5">Keyword Research</CardTitle>
                                <CardText>
                                    We conduct thorough keyword research to identify the most relevant and profitable keywords for your business. This helps us optimize your website’s content and metadata to rank higher in search engine results pages and attract more organic traffic to your website.


                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <Card className="text-center border-5 rounded-4">
                            <div className="d-flex justify-content-center">
                                <Search size="50" />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5">On-page Optimization</CardTitle>
                                <CardText>
                                    We optimize your website’s on-page elements, such as title tags, meta descriptions, header tags, and content, to improve your website’s relevancy and authority in the eyes of search engines. This helps to improve your website’s visibility and rankings in search results pages.


                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <Card className="text-center border-5 rounded-4">
                            <div className="d-flex justify-content-center">
                                <Edit size="50" />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5">Off-page Optimization</CardTitle>
                                <CardText>
                                    We also optimize your website’s off-page elements, such as backlinks, social media signals, and citations, to increase your website’s authority and credibility. This helps to improve your website’s rankings in search results pages and attract more traffic to your website.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg={4} md={12} sm={12}>
                        <Card className="text-center border-5 rounded-4 gap-2">
                            <div className="d-flex justify-content-center">
                                <Search size="50" />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5">Local SEO</CardTitle>
                                <CardText>
                                    We specialize in providing local SEO services to businesses that are looking to improve their visibility in their local market. We optimize your website’s content and metadata for local keywords and create local business listings to improve your visibility in local search results pages.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <Card className="text-center border-5 rounded-4 gap-2">
                            <div className="d-flex justify-content-center">
                                <Navigation size={50} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5">Analytics and Reporting</CardTitle>
                                <CardText>
                                    We provide regular analytics and reporting to track your progress and ROI. We use data-driven insights to make informed decisions about your SEO campaigns and adjust our strategies as needed to ensure that you’re achieving your online marketing goals.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </Container>

        </>
    )
}
export default Seo;