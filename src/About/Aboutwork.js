import { Grid, Monitor, Search, Smartphone } from 'feather-icons-react/build/IconComponents';
import React from 'react'
import { Row, Col, Card, CardBody, CardTitle, CardText, Container, } from 'reactstrap'

function Aboutwork() {
    return (
        <>
            <div className='mt-5'>
                <Container>
                    <Row>
                        <Col>
                            <h4>Work Process or How we work</h4>
                            <p>Orbish Infotech is a software company that specialises in developing
                                custom software solutions for businesses of all sizes. Our software
                                development process is intended to convey great programming that
                                meets the remarkable requirements of our clients. We follow a
                                systematic approach to deliver high-quality software solutions to our
                                clients. At Orbish Infotech, we follow a collaborative and client-centric
                                approach in how we work, ensuring that our clients’ needs and
                                objectives are at the forefront of our software development process.
                            </p>
                            <p>Orbish Infotech committed to delivering customised software solutions
                                that meet our client’s expectations. Our software  development process
                                is made to be transparent, collaborative, and efficient so that clients
                                must be confident that software would deliver on time.
                            </p>
                            <p>Our process features include the following points :</p>
                        </Col>
                        <Col>
                            <div className='d-flex justify-content-center'>
                                <img src='https://ml85xkxbvpuq.i.optimole.com/cb:pIqd.8ad3/w:600/h:600/q:mauto/f:avif/https://orbishinfotech.com/wp-content/uploads/2023/06/work-process.webp' alt='Error' />
                            </div>
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col>
                            <Card
                                style={{
                                    width: '18rem'
                                }}
                            >
                                <div className='d-flex justify-content-center '>
                                    <Monitor size="50" color="red" />
                                </div>

                                <CardBody className='text-center'>
                                    <CardTitle tag="h5">
                                        Client Requirment
                                    </CardTitle>

                                    <CardText>
                                        We work intimately with our clients to figure out their business objectives and prerequisites. This assists us with creating programming arrangements that are customized to their particular necessities.
                                    </CardText>

                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{
                                width: '18rem'
                            }}>
                                <div className='d-flex justify-content-center p-3'>
                                    <Search size="50" color="red" />
                                </div>

                                <CardBody className='text-center'>
                                    <CardTitle tag="h5">
                                        Planning and design
                                    </CardTitle>
                                    <CardText>
                                        We utilize various apparatuses and strategies to plan and plan programming arrangements. This incorporates wireframes, mockups, and models that permit our clients to picture the product.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{
                                width: '18rem'
                            }} >
                                <div className='d-flex justify-content-center p-3'>
                                    <Grid  size="50" color="red"/>

                                </div>
                                <CardBody className='text-center'>
                                    <CardTitle tag="h5">
                                        Development
                                    </CardTitle>
                                    <CardText>
                                        Orbish Infotech team of experienced developers offer cost-efficient customized software development services with our solutions uniquely fitting your needs in your business reqirements.
                                    </CardText>
                                </CardBody>

                            </Card>
                        </Col>
                        <Col>
                            <Card style={{
                                width: '18rem'
                            }}>
                                <div className='d-flex justify-content-center p-3'>
                                    <Smartphone size="50" color="red" />
                                </div>
                                <CardBody className='text-center'>
                                    <CardTitle tag="h5">
                                        Quality Assurance
                                    </CardTitle>
                                    <CardText>
                                        Quality assurance aims to deliver the highest standards of customer service and maintain these standards by continuous evaluation of agents and resolution processes. Our services meets client's requirements.
                                    </CardText>
                                </CardBody>

                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Aboutwork;