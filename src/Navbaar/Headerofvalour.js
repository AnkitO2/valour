import React, { useState } from "react";
import "./Headerofvalour.css"
// import { NavLink, Navbar, NavbarBrand, NavItem, Nav, Row, Col, Popover, PopoverBody, Button, } from "reactstrap";
import {
  NavLink,
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  Row,
  Col,
  Popover,
  PopoverHeader,
  PopoverBody,
  Button,
} from "reactstrap";

function Headerofvalour() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };

  // const [home, setHome] = useState(true);
  // const togglehome = () => {
  //   setHome(!home);
  // }
  const [serviceOpen, setServiceOpen] = useState(false);
  const taoggleService = () => {
    setServiceOpen(!serviceOpen);
  };
  const [SolutionOpen, setSolutionOpen] = useState(false);
  const toggleSolution = () => {
    setSolutionOpen(!SolutionOpen)
  };

  return (
    <>
      <Row>

        <Navbar color="light" light expand="md" >

          <Col lg={3} md={4} sm={12} >
            <NavbarBrand href="" >
              <img src="" alt="Error" />
            </NavbarBrand>
          </Col>

          <Col lg={9} md={8} sm={12}>
            <Nav className="ml-auto d-flex justify-content-center justify-content-between text-center" navbar >
              <NavItem className="Navbar-Content">

                {/* <Button onClick={togglehome}>
                  Home
                </Button> */}
                <NavLink href="/home">Home
                </NavLink>
                {/* <br />
                <NavLink href="/footerbaar">
                </NavLink> */}
                <Navbar color="light" light expand="md">
                  <Col lg={3} md={4} sm={12}>
                    <NavbarBrand href="">Logo Lagao</NavbarBrand>
                  </Col>

                  <Col lg={9} md={8} sm={12}>
                    <Nav
                      className="ml-auto d-flex justify-content-center justify-content-between"
                      navbar
                    >
                      <NavItem className="Navbar-Content">
                        <NavLink href="/home">Home</NavLink>
                      </NavItem>
                      <NavItem className="Navbar-Content">
                        <Button id="popoverButton" onClick={togglePopover} color="white">
                          About
                        </Button>
                        <Popover
                          placement="bottom"
                          isOpen={popoverOpen}
                          target="popoverButton"
                          toggle={togglePopover}
                        >

                          <PopoverBody>



                            <NavLink href="/aboutus">Who we are</NavLink>

                            <br />
                            <NavLink href="/aboutwork">How we work</NavLink>
                          </PopoverBody>
                        </Popover>
                      </NavItem>
                      <NavItem className="Navbar-Content">
                        <Button id="ServiceButton" onClick={taoggleService} color="white">Services</Button>
                        <Popover placement="bottom"
                          isOpen={serviceOpen}
                          target="ServiceButton"
                          toggle={taoggleService}
                        >

                          <PopoverBody>
                            <NavLink href="/webdevlopment">Web Devlopment</NavLink>
                            <br />
                            <NavLink href="/softwareDevlopment">Software Devlopment</NavLink>
                            <br />
                            <NavLink href="/WebsiteDesigning"> Website Designing</NavLink>
                            <br />
                            <NavLink href="/AppDevlopment">App Devlopment</NavLink>
                            <br />
                            <NavLink href="/WebsiteRedesign">Website Redesign</NavLink>
                            <br />
                            <NavLink href="/Webhosting"> Web Hosting</NavLink>
                            <br />
                            <NavLink href="/WebAppDevlopment">WebAppDevlopment</NavLink>
                            <br />
                            <NavLink href="/SoftwareTesting">SoftwareTesting</NavLink>
                            <br />
                            <NavLink href="/AppMaintenance">AppMaintenance</NavLink>
                            <br />
                            <NavLink href="/Ecommerse">Ecommerse</NavLink>
                            <br />
                            <NavLink href="/DigitalMarketing">Digital Marketing</NavLink>
                            <br />
                            <NavLink href="/Seo">Seo</NavLink>
                            <br />
                            <NavLink href="/Smo">Smo</NavLink>
                          </PopoverBody>
                        </Popover>

                      </NavItem>
                      <NavItem className="Navbar-Content">
                        <Button id="SolutionButton" onClick={toggleSolution} color="white">Solution</Button>
                        <Popover placement="bottom"
                          isOpen={SolutionOpen}
                          target="SolutionButton"
                          toggle={toggleSolution}
                        >

                          <PopoverBody>
                            <NavLink href="/AccountingAndBilling">AccountingAndBilling</NavLink>
                            <br />
                            <NavLink href="/MlmSoftware">MlmSoftware</NavLink>
                            <br />
                            <NavLink href="/MicrofinanceSoftware">MicrofinanceSoftware</NavLink>
                            <br />
                            <NavLink href="/EcommerseSoftwareSolution">EcommerseSoftwareSolution</NavLink>
                            <br />
                            <NavLink href="/NewsPortalDevlopment">NewsPortalDevlopment</NavLink>
                            <br />
                            <NavLink href="/RealStateSoftware">RealStateSoftware</NavLink>
                            <br />


                          </PopoverBody>
                        </Popover>

                      </NavItem>
                      <NavItem className="Navbar-Content">
                        <NavLink href="/Resources">Technologies</NavLink>
                      </NavItem>
                      <NavItem className="Navbar-Content">
                        <NavLink href="/Training & Placement">
                          Training & Placement
                        </NavLink>
                      </NavItem>
                      <NavItem className="Navbar-Content">
                        <NavLink href="/career">Careers</NavLink>
                      </NavItem>
                      <NavItem className="Navbar-Content">
                        <NavLink href="/contact">Contact</NavLink>
                      </NavItem>
                      <NavItem className="Navbar-Content">
                        <NavLink href="/Blog">Blog</NavLink>
                      </NavItem>
                      <NavItem className="Navbar-Content">
                        <NavLink href="/Pay Now">Pay Now</NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                </Navbar>
              </Row>
            </>
            );
  }
            export default Headerofvalour;
