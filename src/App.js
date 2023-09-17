import React from 'react';
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
/*****Content of Header******/
import Headerofvalour from './Navbaar/Headerofvalour';
/*****Content of Home Page*****/
import { Scrollbaar } from './Home/Scrollbaar';
/*********Content of About List********* */
import Aboutus from './About/Aboutus';
import Aboutwork from './About/Aboutwork';
/*******Content of Service List*******/
import { WebDevlopment } from './Services/WebDevlopment';
import SoftwareDevlopment from './Services/SoftwareDevlopment';
import WebsiteDesigning from './Services/WebsiteDesigning';
import AppDevlopment from './Services/AppDevlopment';
import WebsiteRedesign from './Services/WebsiteRedesign';
import Webhosting from './Services/Webhosting';
import WebAppDevlopment from './Services/WebAppDevlopment';
import SoftwareTesting from './Services/SoftwareTesting';
import AppMaintenance from './Services/AppMaintenance';
import Ecommerse from './Services/Ecommerse';
import DigitalMarketing from './Services/DigitalMarketing';
import Seo from './Services/Seo';
import Smo from './Services/Smo';
/********Content of Solution List********/
import AccountingAndBilling from './Solutions/AccontingAndBilling';
import MlmSoftware from './Solutions/MlmSoftware';
import MicrofinanceSoftware from './Solutions/MicrofinanceSoftware';
import EcommerseSoftwareSolution from './Solutions/EcommersSoftwareSolution';
import NewsPortalDevlopment from './Solutions/NewsPortalDevlopment';
import RealStateSoftware from './Solutions/RealStateSoftware';
import Technologies from './Resources/Technologies';
/*****Content for  footerbar******/
import { Footerbaar } from './Footer/Footerbaar';

function App() {

  return (
    <>
<Headerofvalour/>
    
    <Router>
     
      <div class='App'>
        
        <Routes>
          <Route path='/home' element={<Scrollbaar />} />
          <Route path='/footerbaar' element={<Footerbaar />} />
          <Route path="/aboutus" index element={<Aboutus />} />
          <Route path='/aboutwork' element={<Aboutwork />} />
          <Route path='/webdevlopment' index element={<WebDevlopment />} />
          <Route path='/softwareDevlopment' element={<SoftwareDevlopment />} />
          <Route path='/WebsiteDesigning' element={<WebsiteDesigning />} />
          <Route path='/AppDevlopment' element={<AppDevlopment />} />
          <Route path='/WebsiteRedesign' element={<WebsiteRedesign />} />
          <Route path='/Webhosting' element={<Webhosting />} />
          <Route path='/WebAppDevlopment' element={<WebAppDevlopment />} />
          <Route path='/SoftwareTesting' element={<SoftwareTesting />} />
          <Route path='/AppMaintenance' element={<AppMaintenance />} />
          <Route path='/Ecommerse' element={<Ecommerse />} />
          <Route path='/DigitalMarketing' element={<DigitalMarketing />} />
          <Route path='/Seo' element={<Seo />} />
          <Route path='/Smo' element={<Smo />} />
          <Route path='/AccountingAndBilling' index element={<AccountingAndBilling />} />
          <Route path='/MlmSoftware' element={<MlmSoftware />} />
          <Route path='/MicrofinanceSoftware' element={<MicrofinanceSoftware />} />
          <Route path='/EcommerseSoftwareSolution' element={<EcommerseSoftwareSolution />} />
          <Route path='/NewsPortalDevlopment' element={<NewsPortalDevlopment />} />
          <Route path='/RealStateSoftware' element={<RealStateSoftware />} />
          <Route path='/Technologies' element={<Technologies />} />
        </Routes >
      </div >
    </Router >
    </>
  );
}

export default App;
