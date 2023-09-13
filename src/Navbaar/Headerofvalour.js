import React from "react";
import "./Headerofvalour.css"
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';



function Headerofvalour() {


  return (
    <>
      <Router>
        <div >
          <nav className="d-flex">
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/"> About </Link>
              </li>
              <li>
                <Link to="/"> Services </Link>
              </li>
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                <Link to="/"> Training And Placement </Link>
              </li>
              <li>
                <Link to="/">Careers  </Link>
              </li>
              <li>
                <Link to="/">Contacts  </Link>
              </li>
              <li>
                <Link to="/">Blogs  </Link>
              </li>
              <li>
                <Link to="/">Pay Now  </Link>
              </li>
            </ul>

          </nav>
        </div>
        <Routes>
          <Route path="/Home">

          </Route>
        </Routes>
        <Routes>
          <Route path="/About">

          </Route>
        </Routes>
        <Routes>
          <Route path="/Service">

          </Route>
        </Routes>
        <Routes>
          <Route path="/Solution">

          </Route>
        </Routes>
        <Routes>
          <Route>

          </Route>
        </Routes>
        <Routes>
          <Route>

          </Route>

        </Routes>



      </Router>


      {/* < Nav class="navbar">
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
      </Nav> */}

      <script src="script.js">
      </script>




    </>

  );
}
export default Headerofvalour;
