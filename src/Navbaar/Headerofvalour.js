import React, { useState } from "react";
import "./Headerofvalour.css"
import { NavLink, Navbar, NavbarBrand, NavItem, Nav, Row, Col, Popover, PopoverHeader, PopoverBody, Button, } from "reactstrap";


function Headerofvalour() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };


  return (
    <>
      <Row>
        <Navbar color="light" light expand="md">

          <Col lg={3} md={4} sm={12} >
            <NavbarBrand href="" >Logo Lagao</NavbarBrand>
          </Col>

          <Col lg={9} md={8} sm={12}>
            <Nav className="ml-auto d-flex justify-content-center justify-content-between" navbar >
              <NavItem className="Navbar-Content">
                <NavLink href="/home">Home

                </NavLink>
              </NavItem>
              <NavItem className="Navbar-Content">
                <Button id="popoverButton" onClick={togglePopover}>
                  About
                </Button>
                <Popover
                  placement="bottom"
                  isOpen={popoverOpen}
                  target="popoverButton"
                  toggle={togglePopover}
                >
                  <PopoverHeader>About</PopoverHeader>
                  <PopoverBody>
                    <NavLink href="/" >Who we are</NavLink>
                    <br />
                    <NavLink href="/">How we work</NavLink>
                  </PopoverBody>
                </Popover>

              </NavItem>
              <NavItem className="Navbar-Content">
                <NavLink href="/service">Service</NavLink>
              </NavItem>
              <NavItem className="Navbar-Content">
                <NavLink href="/solution">Solution</NavLink>
              </NavItem>
              <NavItem className="Navbar-Content">
                <NavLink href="/Resources">Resources</NavLink>
              </NavItem>
              <NavItem className="Navbar-Content">
                <NavLink href="/Training & Placement">Training & Placement</NavLink>
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
