import React from 'react'
import './Headerofvalour.css'
import { Container } from 'reactstrap'
export const Headerofvalour = () => {
  return (
<>
      < nav class="navbar">
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
      </script>
      </>

  )
}
