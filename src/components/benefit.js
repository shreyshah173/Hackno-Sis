import React from 'react';

function Benefit({ user }) {
  return (
    <section className="service-sec" id="benefits">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading text-md-center text-xs-center">
              <h2>
                <small>Benefits of Our Elderly Care Assistant</small>
                Empowering Seniors for a Healthier, More Independent Life
              </h2>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6 text-sm-center service-block">
                <i className="fa fa-user-md" aria-hidden="true"></i>
                <h3>Personalized Health Insights</h3>
                <p>Get tailored analysis of your medical reports and easy-to-understand explanations of your health conditions.</p>
              </div>
              <div className="col-md-6 text-sm-center service-block">
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                <h3>24/7 Virtual Assistance</h3>
                <p>Access health information and get immediate answers to your medical queries anytime, anywhere.</p>
              </div>
              <div className="col-md-6 text-sm-center service-block">
                <i className="fa fa-heartbeat" aria-hidden="true"></i>
                <h3>Customized Wellness Plans</h3>
                <p>Receive personalized diet recommendations and exercise routines based on your unique health profile.</p>
              </div>
              <div className="col-md-6 text-sm-center service-block">
                <i className="fa fa-medkit" aria-hidden="true"></i>
                <h3>Medication Management</h3>
                <p>Get timely reminders for medication intake and track your prescription refills and doctor appointments.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img src="img/eld_care.jpg" className="img-fluid" alt="Elderly Care Assistant" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefit;