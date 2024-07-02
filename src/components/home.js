import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import exampleImage1 from '../img/1.jpg';
import exampleImage2 from '../img/2.jpg';  // Make sure to import other images as well
import exampleImage3 from '../img/3.jpg';  // Make sure to import other images as well


function Home() {
    return (
      <Carousel fade={true} controls={true} indicators={true} interval={3000} pause={false}>
      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            className="d-block carousel-image"
            src={exampleImage1}
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block carousel-image"
              src={exampleImage2}
              alt="Second slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
              <img
                className="d-block carousel-image"
                src={exampleImage3}
                alt="Third slide"
              />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Home;
  
