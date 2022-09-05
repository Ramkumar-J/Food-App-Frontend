import React from "react";

function Footer() {
  return (
    <footer className="container-fluid footer-style">
      <div className="container">
        <div className="row mt-3">
          <div className="col-lg-12">
            <h2 className="fw-bold text-danger mt-3">SanBurg Restaurent</h2>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <div className="row text-uppercase fs-6">
              <div className="col-12 col-lg-12">
                <p className="mb-0">About sanburg</p>
              </div>
            </div>
            <div className="row mt-0 text-capitalize">
              <div className="col-12 col-lg-12">
                <a href="#" className="text-secondary">
                  who we are
                </a>
              </div>
            </div>
            <div className="row mt-0 text-capitalize">
              <div className="col-12 col-lg-12">
                <a href="#" className="text-secondary">
                  contact us
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <div className="row mt-0 text-uppercase fs-6">
              <div className="col-12 col-lg-12">
                <p className="mb-0">Sanburg branches</p>
              </div>
            </div>
            <div className="row mt-0 text-capitalize">
              <div className="col-12 col-lg-12">
                <a href="#" className="text-secondary">
                  Chennai
                </a>
              </div>
            </div>
            <div className="row mt-0 text-capitalize">
              <div className="col-12 col-lg-12">
                <a href="#" className="text-secondary">
                  bangalore
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <div className="row text-uppercase fs-6">
              <div className="col-12 col-lg-12">
                <p className="mb-0">For Restaurents</p>
              </div>
            </div>
            <div className="row mt-0 text-capitalize">
              <div className="col-12 col-lg-12">
                <a href="#" className="text-secondary">
                  partner with us
                </a>
              </div>
            </div>
            <div className="row mt-0 text-capitalize">
              <div className="col-12 col-lg-12">
                <a href="#" className="text-secondary">
                  apps for you
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <div className="row text-uppercase fs-6">
              <div className="col-12 col-lg-12">
                <p className="mb-0">Learn more</p>
              </div>
            </div>
            <div className="row mt-0 text-capitalize">
              <div className="col-12 col-lg-12">
                <a href="#" className="text-secondary">
                  privacy
                </a>
              </div>
            </div>
            <div className="row mt-0 text-capitalize">
              <div className="col-12 col-lg-12">
                <a href="#" className="text-secondary">
                  terms
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <small className="text-secondary">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2022 © SanBurg™ Ltd. All rights
          reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
