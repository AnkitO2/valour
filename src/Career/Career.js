import React from 'react'
import { Container, Form, FormGroup, Label, Row, Col, Input } from 'reactstrap';
import { Footerbaar } from '../Footer/Footerbaar';
function Career() {
    return (

        <Container>
            <Row>

                <Col lg={4} md={6} sm={12}>
                    <h4>Join valour and you’ll enjoy…</h4>
                    <p className='text-dark-emphasis'>
                        valur Infotech not only offers a great culture to
                        work in, but unique management style that
                        promotes self – management. Finding the right
                        talent and solutions for our clients is the core of
                        our business but finding the right fit for talents is
                        our continuing mission.
                    </p>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Name
                            </Label>
                            <Input
                                id="exampleName"
                                name="name"
                                placeholder="Enter Name"
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Email
                            </Label>
                            <Input
                                id="exampleName"
                                name="name"
                                placeholder="Enter Email"
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="example">
                                Phone No.
                            </Label>
                            <Input
                                id="exampleNumber"
                                name="name"
                                placeholder="Enter Phone Numbr"
                                type="number"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">
                                Post Appllied for
                            </Label>
                            <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                            >
                                <option>
                                    Software Devlloper
                                </option>
                                <option>
                                    Website Designing
                                </option>
                                <option>
                                    Graphic Designer
                                </option>
                                <option>
                                    Internship Trainee
                                </option>
                                <option>
                                    Software Devloper Trainee</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleFile">
                                File
                            </Label>
                            <Input
                                id="exampleFile"
                                name="file"
                                type="file"
                            />
                            {/* <FormText>
                                This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
                            </FormText> */}
                        </FormGroup>
                    </Form>
                </Col>
                <Col lg={8} md={6} sm={12}>
                    <div className='d-flex justify-content-center'>
                        <img src='https://ml85xkxbvpuq.i.optimole.com/w:700/h:896/q:mauto/f:avif/https://orbishinfotech.com/wp-content/uploads/2023/06/Careers-with-us.webp' alt='Error' />
                    </div>
                </Col>
            </Row>
            <Footerbaar />
        </Container>

    )
}
export default Career;