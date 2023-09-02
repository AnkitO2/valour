import React from "react";
import "./Footerbaar.css";
import { Row, Col, Container } from "reactstrap";
import { ArrowRight } from "feather-icons-react/build/IconComponents";

export const Footerbaar = () => {
  return (
    <Container fluid className="bg-dark">
      <Container>
        <Row className="mt-3">
          <Col lg={3}>
            <h4 className="text-white  d-flex justify-content-start mt-5">
              Services
            </h4>

            <div className="mt-5">
              <div className="text-center">
                <div className="d-flex gap-3 ">
                  <ArrowRight className="icon" />
                  <p className="">Web App Devlopment</p>
                </div>
              </div>

              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p className="">Hosting</p>
              </div>
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>Website Designing</p>
              </div>
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>Web Devlopment</p>
              </div>
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>Website Designing</p>
              </div>
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>App Devlopment</p>
              </div>
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>App Maintenance</p>
              </div>
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>Digital Marketing</p>
              </div>
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>E-Commerce Devlopment</p>
              </div>
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>SEO</p>
              </div>
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>SMO</p>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <h4 className="text-white  d-flex justify-content-start mt-5">
              Solutions
            </h4>
            <div className="mt-5">
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>News Portal Software</p>
              </div>
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>Salon Management Software</p>
              </div>
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>Real State Software</p>
              </div>
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>Microfinance Software</p>
              </div>
              <div className="d-flex  gap-3">
                <ArrowRight className="icon" />
                <p>Accounting and Billing Software</p>
              </div>
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>ERP Software</p>
              </div>
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>Libray Management Software</p>
              </div>
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>MLM Software</p>
              </div>
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>Crm Software</p>
              </div>
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>Parent Notification Software</p>
              </div>

              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>School Management Software </p>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <h4 className="text-white  d-flex justify-content-start mt-5">
              Use Full Links
            </h4>
            <div className="mt-5">
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />

                <p>Home</p>
              </div>
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>How We Work</p>
              </div>
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>Technologies</p>
              </div>
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>Portfolio</p>
              </div>
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>Career With Us</p>
              </div>
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>Blogs</p>
              </div>
              <div className="d-flex gap-3">
                <ArrowRight className="icon" />
                <p>Free Quates</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
