import React from 'react';

function Blog() {
    return (
        <section className="blog-sec" id="blog">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading text-md-center text-xs-center">
                            <h2><small>Get Tips and Tricks</small>Our Blog</h2>
                        </div>
                    </div>
                    <div className="col-md-4 blog-box">
                        <div className="blog-image-block">
                            <img src="img/blog-01.jpg" alt="" className="img-fluid" />
                        </div>
                        <h3 className="blog-title"><small>Tips</small><a href="#">Calm mind brings inner strength</a></h3>
                        <p className="blog-content">Our greatest happiness does not depend on the condition of life</p>
                    </div>
                    <div className="col-md-4 blog-box">
                        <div className="blog-image-block">
                            <img src="img/blog-02.jpg" alt="" className="img-fluid" />
                        </div>
                        <h3 className="blog-title"><small>Benefits</small><a href="#">Happiness is nothing more than good health</a></h3>
                        <p className="blog-content">Our greatest happiness does not depend on the condition of life</p>
                    </div>
                    <div className="col-md-4 blog-box">
                        <div className="blog-image-block">
                            <img src="img/blog-03.jpg" alt="" className="img-fluid" />
                        </div>
                        <h3 className="blog-title"><small>Products</small><a href="#">Being all equal and independent</a></h3>
                        <p className="blog-content">Our greatest happiness does not depend on the condition of life</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;
