import React from 'react';
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
//import WebAppDevlopment from './Services/WebAppDevlopment';
import Headerofvalour from './Navbaar/Headerofvalour';
//import { Scrollbaar } from './Home/Scrollbaar';

import Aboutus from './About/Aboutus';
import Aboutwork from './About/Aboutwork';
import { Footerbaar } from './Footer/Footerbaar';
//import { WebDevlopment } from './Services/WebDevlopment';
//import SoftwareDevlopment from './Services/SoftwareDevlopment';
//import WebsiteDesigning from './Services/WebsiteDesigning';
//import AppDevlopment from './Services/AppDevlopment';
//import WebsiteRedesign from './Services/WebsiteRedesign';
//import Webhosting from './Services/Webhosting';
//import WebAppDevlopment from './Services/WebAppDevlopment';
//import SoftwareTesting from './Services/SoftwareTesting';
//import AppMaintenance from './Services/AppMaintenance';
//import Ecommerse from './Services/Ecommerse';
//import DigitalMarketing from './Services/DigitalMarketing';
//import Seo from './Services/Seo';
//import Smo from './Services/Smo';
//import AccountingAndBilling from './Solutions/AccontingAndBilling';
//import MlmSoftware from './Solutions/MlmSoftware';
//import MicrofinanceSoftware from './Solutions/MicrofinanceSoftware';
//import EcommerseSoftwareSolution from './Solutions/EcommersSoftwareSolution';
//import NewsPortalDevlopment from './Solutions/NewsPortalDevlopment';
//import RealStateSoftware from './Solutions/RealStateSoftware';
//import Technologies from './Resources/Technologies';
//import Training from './Training/Training';
function App() {

  return (
    <Router>
      <div class='App'>
        {/* 
               <Scrollbaar />
              <Footerbaar/>
              <Aboutus/>       
              <Aboutwork/>  
              <AppDevlopment />
              <WebDevlopment /> 
              <SoftwareDevlopment/>
              <WebsiteDesigning/>
              <WebsiteRedesign/>    
              <Webhosting/>               
              <WebAppDevlopment />           
              <SoftwareTesting/>    
              <AppMaintenance/>
              <Ecommerse/>
              <DigitalMarketing/>
              <Seo/>
              <Smo/>
              <AccountingAndBilling/>
              <MlmSoftware/> 
              <MicrofinanceSoftware/>
              <EcommerseSoftwareSolution/>
              <NewsPortalDevlopment/>
              <RealStateSoftware/> 
              <Technologies/>
              <Training/>
               */}
        <Headerofvalour />

        <Routes>
          <Route path="/aboutus" index element={<Aboutus />}/>
          <Route path="/aboutwork" index element={<Aboutwork/>}/>
          <Route path='/'/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
