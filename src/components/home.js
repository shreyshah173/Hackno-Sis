import React from 'react';

function Home() {
    return (
        <div className="swiper-container main-slider" id="myCarousel">
            <div className="swiper-wrapper">
                <div className="swiper-slide slider-bg-position" style={{ background: "url('img/1.jpg')" }} data-hash="slide1">
                    <h2>It is health that is real wealth and not pieces of gold and silver</h2>
                </div>
                <div className="swiper-slide slider-bg-position" style={{ background: "url('img/3.jpg')" }} data-hash="slide2">
                    <h2>Happiness is nothing more than good health and a bad memory</h2>
                </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"><i className="fa fa-chevron-left"></i></div>
            <div className="swiper-button-next"><i className="fa fa-chevron-right"></i></div>
        </div>
    );
}

export default Home;
