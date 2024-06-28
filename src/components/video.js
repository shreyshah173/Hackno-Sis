import React from 'react';

function VideoSection() {
  return (
    <section className="video-sec parallax-section">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="wow fadeInUp" data-wow-delay="0.5s">
              Watch the video
              <small>
                Without health life is not life; it is only a state of langour and suffering - an image of death.
              </small>
            </h2>
            <a href="#">
              <i className="fa fa-play"></i>
            </a>
            <small>
              <em>Video by: Health Tips</em>
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
