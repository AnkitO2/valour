import React from 'react'
import './Footerbaar.css';
import { Button, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { ArrowRight } from 'feather-icons-react/build/IconComponents';


export const Footerbaar = () => {
    return (
        <>
            <Row className='bg-dark'>
                <Col lg={3}>
                    <h4 className='text-white d-flex justify-content-start mt-2'>Services</h4>

                    <div className='mt-5'>
                        <div className='d-flex gap-3 d-flex justify-content-start'>
                            <ArrowRight className="icon" />
                            <p className=''>Web App Devlopment</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className=''>Hosting</p>

                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start"'>Website Redesign</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start"'>Web Devlopment</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start"'>Website Designing</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start"'>App Devlopment</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start"'>App Maintenance</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start"'>Digital Marketing</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start'>E-Commerce Devlopment</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start'>SEO</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start'>SMO</p>
                        </div>


                    </div>
                </Col>
                <Col lg={3}>
                    < h4 className='text-white d-flex justify-content-start mt-2'>Solutions</h4>
                    <div className='mt-5'>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start'>News Portal Software</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start'>Salon Management Software</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start'>Real State Software</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start'>Microfinance Software</p>
                        </div>
                        <div className='d-flex  gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start'>Accounting and Billing Software</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start'>ERP Software</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start'>Libray Management Software</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start'>MLM Software</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start'>Crm Software</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start'>Parent Notification Software</p>
                        </div>

                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start'>School Management Software </p>
                        </div>


                    </div>
                </Col>
                <Col lg={3}>
                    < h4 className='text-white d-flex justify-content-start mt-2'>Use Full Links</h4>
                    <div className='mt-5'>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />

                            <p className='d-flex justify-content-start'>Home</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start'>How We Work</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start'>Technologies</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start'>Portfolio</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start'>Career With Us</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start'>Blogs</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <ArrowRight className="icon" />
                            <p className='d-flex justify-content-start'>Free Quates</p>
                        </div>


                    </div>
                </Col>
                <Col lg={3}>
                    <h4 className='text-white d-flex justify-content-start mt-2'> Get in Touch with us</h4>
                    <div className='mt-5'>
                        <Card

                        >
                            <CardBody>
                                <CardTitle tag="p" className='d-flex justify-content-start'>
                                    Get in Touch with us
                                </CardTitle>
                                <h4 className='d-flex justify-content-start'>+91 9305963599</h4>
                                <h4 className='d-flex justify-content-start'>+91 9335027149</h4>
                                <h4 className='d-flex justify-content-start'>Email Id</h4>
                                <h4 className='d-flex justify-content-start'>Linkdin</h4>
                                <h4 className='d-flex justify-content-start'>Instagram</h4>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
            </Row>
        </>
    );
}
