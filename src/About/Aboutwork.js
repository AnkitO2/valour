import { Grid, Monitor, Search, Smartphone } from 'feather-icons-react/build/IconComponents';
import React from 'react'
import { Row, Col, Card, CardBody, CardTitle, CardText, Container, } from 'reactstrap'
import "./Aboutwork.css"
import { Footerbaar } from '../Footer/Footerbaar';
function Aboutwork() {
    return (
        <>

            <Container className='mt-5'>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <h4>Work Process or How we work</h4>
                        <p className='text-dark-emphasis'>valour Infotech is a software company that specialises in developing
                            custom software solutions for businesses of all sizes. Our software
                            development process is intended to convey great programming that
                            meets the remarkable requirements of our clients. We follow a
                            systematic approach to deliver high-quality software solutions to our
                            clients. At Orbish Infotech, we follow a collaborative and client-centric
                            approach in how we work, ensuring that our clients’ needs and
                            objectives are at the forefront of our software development process.
                        </p>
                        <p className='text-dark-emphasis'>valour Infotech committed to delivering customised software solutions
                            that meet our client’s expectations. Our software  development process
                            is made to be transparent, collaborative, and efficient so that clients
                            must be confident that software would deliver on time.
                        </p>
                        <p className='text-dark-emphasis'>Our process features include the following points :</p>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <div className='d-flex justify-content-center'>
                            <img src='https://ml85xkxbvpuq.i.optimole.com/cb:pIqd.8ad3/w:600/h:600/q:mauto/f:avif/https://orbishinfotech.com/wp-content/uploads/2023/06/work-process.webp' alt='Error' />
                        </div>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col lg={3} md={6} sm={12}>
                        <Card
                            style={{

                            }}
                        >
                            <div className='d-flex justify-content-center p-3'>
                                <Monitor size="50" color="green" />
                            </div>

                            <CardBody className='text-center'>
                                <CardTitle tag="h5">
                                    Client Requirment
                                </CardTitle>

                                <CardText className='text-dark-emphasis'>
                                    We work intimately with our clients to figure out their business objectives and prerequisites. This assists us with creating programming arrangements that are customized to their particular necessities.
                                </CardText>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <Card style={{

                        }}>
                            <div className='d-flex justify-content-center p-3'>
                                <Search size="50" color="green" />
                            </div>

                            <CardBody className='text-center'>
                                <CardTitle tag="h5">
                                    Planning and design
                                </CardTitle>
                                <CardText className='text-dark-emphasis'>
                                    We utilize various apparatuses and strategies to plan and plan programming arrangements. This incorporates wireframes, mockups, and models that permit our clients to picture the product.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <Card style={{

                        }} >
                            <div className='d-flex justify-content-center p-3'>
                                <Grid size="50" color="green" />

                            </div>
                            <CardBody className='text-center'>
                                <CardTitle tag="h5">
                                    Development
                                </CardTitle>
                                <CardText className='text-dark-emphasis'>
                                    Orbish Infotech team of experienced developers offer cost-efficient customized software development services with our solutions uniquely fitting your needs in your business reqirements.
                                </CardText>
                            </CardBody>

                        </Card>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <Card style={{

                        }}>
                            <div className='d-flex justify-content-center p-3'>
                                <Smartphone size="50" color="green" />
                            </div>
                            <CardBody className='text-center'>
                                <CardTitle tag="h5">
                                    Quality Assurance
                                </CardTitle>
                                <CardText className='text-dark-emphasis'>
                                    Quality assurance aims to deliver the highest standards of customer service and maintain these standards by continuous evaluation of agents and resolution processes. Our services meets client's requirements.
                                </CardText>
                            </CardBody>

                        </Card>
                    </Col>
                </Row>
                <Footerbaar/>
            </Container>

        </>
    )
}
export default Aboutwork;