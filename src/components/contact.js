import React from 'react';

function Contact() {
  return (
    <section className="contact-sec" id="contact">
      <div className="container">
        <h2>
          Get in Touch <small>Our work is the presentation of our capabilities.</small>
        </h2>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="exampleName">Name</label>
              <input type="text" className="form-control" id="exampleName" aria-describedby="emailHelp" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="examplePhone">Phone Number</label>
              <input type="text" className="form-control" id="examplePhone" aria-describedby="emailHelp" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="exampleTextarea">Enter your Message</label>
            <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
          </div>
          <div className="col-md-12 text-xs-center action-block">
            <a href="#" className="btn btn-capsul btn-aqua">Submit</a>
          </div>
        </div>
    </div>  
</section>
);
}

export default Contact;
