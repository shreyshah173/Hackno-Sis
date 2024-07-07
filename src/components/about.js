import React from 'react';

function About() {
    return (
        <section className="about-sec parallax-section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h2><small>Who We Are</small>About Our<br />Concept Of Longevity</h2>
                    </div>
                    <div className="col-md-4">
                        <p>Our elderly care assistant system is designed to empower seniors to lead healthier, more independent lives. We believe that with the right support and tools, older adults can maintain their well-being and enjoy their golden years to the fullest.</p>
                        <p>By combining cutting-edge technology with compassionate care, we provide personalized health insights, 24/7 virtual medical assistance, and customized wellness plans tailored to each individual's needs.</p>
                    </div>
                    <div className="col-md-4">
                        <p>Our system goes beyond basic health management. We offer features like medication reminders, intelligent health monitoring, and cognitive stimulation exercises. We also facilitate social connections and provide emotional well-being support.</p>
                        <p>We're committed to enhancing the quality of life for seniors, helping them stay connected with loved ones, and providing peace of mind to families. Our goal is to make health management easier, more accessible, and more effective for older adults.</p>
                        <p><a href="#features" className="btn btn-transparent-white btn-capsul">Explore Features</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;