import React, { useState } from "react";
import "./Headerofvalour.css";
import Logo from "../logo/logoOne.jpg";
import {
  NavLink,
  Navbar,
  NavItem,
  Nav,
  Row,
  Col,
  Popover,
  PopoverBody,
  Button,
  Container
} from "reactstrap";

function Headerofvalour() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };

  // const [home, setHome] = useState(true);
  // const togglehome = () => {
  //   setHome(!home);
  // };
  const [serviceOpen, setServiceOpen] = useState(false);
  const taoggleService = () => {
    setServiceOpen(!serviceOpen);
  };
  const [SolutionOpen, setSolutionOpen] = useState(false);
  const toggleSolution = () => {
    setSolutionOpen(!SolutionOpen);
  };
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const toggleResources = () => {
    setResourcesOpen(!resourcesOpen);
  };

  return (
    <Container fluid>
      <Row className="">
        <Navbar color="light" light expand="md">
          <Col lg={2} md={6} sm={12}>
            <div className="d-flex justify-content-center">
              <img src={Logo} alt="Error" height={50} width={250} />
            </div>
          </Col>
          <Col lg={10} md={6} sm={12}>
            <Nav
              className="ml-auto d-flex justify-content-center justify-content-evenly text-center"
              navbar
            >
              <NavItem className="Navbar-Content">
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              <NavItem className="Navbar-Content">
                <Button
                  id="popoverButton"
                  onClick={togglePopover}
                  color="white"
                >
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
                <Button
                  id="ServiceButton"
                  onClick={taoggleService}
                  color="white"
                >
                  Services
                </Button>
                <Popover
                  placement="bottom"
                  isOpen={serviceOpen}
                  target="ServiceButton"
                  toggle={taoggleService}
                >
                  <PopoverBody>
                    <NavLink href="/webdevlopment">Web Devlopment</NavLink>
                    <br />
                    <NavLink href="/softwareDevlopment">
                      Software Devlopment
                    </NavLink>
                    <br />
                    <NavLink href="/WebsiteDesigning">
                      {" "}Website Designing
                    </NavLink>
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
                    <NavLink href="/DigitalMarketing">
                      Digital Marketing
                    </NavLink>
                    <br />
                    <NavLink href="/Seo">Seo</NavLink>
                    <br />
                    <NavLink href="/Smo">Smo</NavLink>
                  </PopoverBody>
                </Popover>
              </NavItem>
              <NavItem className="Navbar-Content">
                <Button
                  id="SolutionButton"
                  onClick={toggleSolution}
                  color="white"
                >
                  Solution
                </Button>
                <Popover
                  placement="bottom"
                  isOpen={SolutionOpen}
                  target="SolutionButton"
                  toggle={toggleSolution}
                >
                  <PopoverBody>
                    <NavLink href="/AccountingAndBilling">
                      AccountingAndBilling
                    </NavLink>
                    <br />
                    <NavLink href="/MlmSoftware">MlmSoftware</NavLink>
                    <br />
                    <NavLink href="/MicrofinanceSoftware">
                      MicrofinanceSoftware
                    </NavLink>
                    <br />
                    <NavLink href="/EcommerseSoftwareSolution">
                      EcommerseSoftwareSolution
                    </NavLink>
                    <br />
                    <NavLink href="/NewsPortalDevlopment">
                      NewsPortalDevlopment
                    </NavLink>
                    <br />
                    <NavLink href="/RealStateSoftware">
                      RealStateSoftware
                    </NavLink>
                    <br />
                  </PopoverBody>
                </Popover>
              </NavItem>
              <NavItem className="Navbar-Content">
                <Button
                  id="ResourcesButton"
                  onClick={toggleResources}
                  color="white"
                >
                  Resources
                </Button>
                <Popover
                  placement="bottom"
                  isOpen={resourcesOpen}
                  target="ResourcesButton"
                  toggle={toggleResources}
                >
                  <PopoverBody>
                    <NavLink href="/Technologies">Technologies</NavLink>
                  </PopoverBody>
                </Popover>
              </NavItem>
              <NavItem className="Navbar-Content">
                <NavLink href="/Taining">Training & Placement</NavLink>
              </NavItem>
              <NavItem className="Navbar-Content">
                <NavLink href="/Career">Careers</NavLink>
              </NavItem>
              <NavItem className="Navbar-Content">
                <NavLink href="/Contactus">Contact</NavLink>
              </NavItem>
              <NavItem className="Navbar-Content">
                <NavLink>Blog</NavLink>
              </NavItem>
              <NavItem className="Navbar-Content">
                <NavLink>Pay Now</NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Navbar>
      </Row>
    </Container>
  );
}

export default Headerofvalour;
