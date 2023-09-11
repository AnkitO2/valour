import React, { useState } from 'react';
import "./Headerofvalour.css"
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function Headerofvalour() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      {/* < nav class="navbar">
        <div class="logo">

        </div>
        <ul class="nav-links">
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">PRODUCTS</a></li>
          <li><a href="#">TRAINING AND PLACEMENT</a></li>
          <li><a href="#">CAREERS</a></li>
          <li><a href="#">CONTACT</a></li>
          <li><a href="#">BLOG</a></li>
          <li id='pay-now'><a href="#" >PAY NOW</a></li>
        </ul>
        <div class="burger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </nav>

      <script src="script.js">
      </script> */}

      <div className='Container'>
        <Navbar>
          {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
          {/* <NavbarToggler onClick={toggle} /> */}

          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/Home/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Services
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Solutions
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Web Devlopment</DropdownItem>
                <DropdownItem>App Devlopment</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>

        </Navbar>
      </div>



    </>

  );
}
export default Headerofvalour;
