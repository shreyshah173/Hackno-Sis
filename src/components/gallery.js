import React from 'react';

function Gallery() {
  return (
    <section className="gallery-sec" id="gallery">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading text-md-center text-xs-center">
              <h2>
                <small>Story Through Images</small>Fitness Image Gallery
              </h2>
            </div>
          </div>
          <div className="col-md-12">
            {/* iso section */}
            <div className="iso-section text-md-center text-xs-center" data-wow-delay="0.5">
              <ul className="filter-wrapper clearfix">
                <li><a href="#" data-filter="*" className="selected opc-main-bg">All</a></li>
                <li><a href="#" className="opc-main-bg" data-filter=".london">London</a></li>
                <li><a href="#" className="opc-main-bg" data-filter=".paris">Paris</a></li>
                <li><a href="#" className="opc-main-bg" data-filter=".ny">New York</a></li>
                <li><a href="#" className="opc-main-bg" data-filter=".hn">Hong Kong</a></li>
              </ul>

              {/* iso box section */}
              <div className="iso-box-section wow fadeInUp" data-wow-delay="0.9s">
                <div className="iso-box-wrapper col4-iso-box">
                  <div className="iso-box london paris ny col-md-4 col-sm-6">
                    <div className="gallery-thumb">
                      <a href="img/photo-gallery-01.jpg" data-lightbox-gallery="food-gallery">
                        <img src="img/photo-gallery-01.jpg" className="fluid-img" alt="Gallery" />
                        <div className="gallery-overlay">
                          <div className="gallery-item"><i className="fa fa-search"></i></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="iso-box london ny hn col-md-4 col-sm-6">
                    <div className="gallery-thumb">
                      <a href="img/photo-gallery-02.jpg" data-lightbox-gallery="food-gallery">
                        <img src="img/photo-gallery-02.jpg" className="fluid-img" alt="Gallery" />
                        <div className="gallery-overlay">
                          <div className="gallery-item"><i className="fa fa-search"></i></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="iso-box hn col-md-4 col-sm-6">
                    <div className="gallery-thumb">
                      <a href="img/photo-gallery-03.jpg" data-lightbox-gallery="food-gallery">
                        <img src="img/photo-gallery-03.jpg" className="fluid-img" alt="Gallery" />
                        <div className="gallery-overlay">
                          <div className="gallery-item"><i className="fa fa-search"></i></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="iso-box london col-md-4 col-sm-6">
                    <div className="gallery-thumb">
                      <a href="img/photo-gallery-04.jpg" data-lightbox-gallery="food-gallery">
                        <img src="img/photo-gallery-04.jpg" className="fluid-img" alt="Gallery" />
                        <div className="gallery-overlay">
                          <div className="gallery-item"><i className="fa fa-search"></i></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="iso-box ny col-md-4 col-sm-6">
                    <div className="gallery-thumb">
                      <a href="img/photo-gallery-05.jpg" data-lightbox-gallery="food-gallery">
                        <img src="img/photo-gallery-05.jpg" className="fluid-img" alt="Gallery" />
                        <div className="gallery-overlay">
                          <div className="gallery-item"><i className="fa fa-search"></i></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="iso-box paris lunch col-md-4 col-sm-6">
                    <div className="gallery-thumb">
                      <a href="img/photo-gallery-06.jpg" data-lightbox-gallery="food-gallery">
                        <img src="img/photo-gallery-06.jpg" className="fluid-img" alt="Gallery" />
                        <div className="gallery-overlay">
                          <div className="gallery-item"><i className="fa fa-search"></i></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
