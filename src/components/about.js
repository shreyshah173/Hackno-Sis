import React from 'react';

function About() {
    return (
        <section className="about-sec parallax-section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h2><small>Who We Are</small>About<br />Our Blog</h2>
                    </div>
                    <div className="col-md-4">
                        <p>To enjoy good health, to bring true happiness to one's family, to bring peace to all, one must first discipline and control one's own mind. If a man can control his mind he can find the way to Enlightenment, and all wisdom and virtue will naturally come to him.</p>
                        <p>Saving our planet, lifting people out of poverty, advancing economic growth... these are one and the same fight. We must connect the dots between climate change, water scarcity, energy shortages, global health, food security and women's empowerment. Solutions to one problem must be solutions for all.</p>
                    </div>
                    <div className="col-md-4">
                        <p>Our greatest happiness does not depend on the condition of life in which chance has placed us, but is always the result of a good conscience, good health, occupation, and freedom in all just pursuits.</p>
                        <p>Being in control of your life and having realistic expectations about your day-to-day challenges are the keys to stress management, which is perhaps the most important ingredient to living a happy, healthy and rewarding life.</p>
                        <p><a href="#" className="btn btn-transparent-white btn-capsul">Explore More</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
