import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import Benefit from './components/benefit';
import About from './components/about';
import Blog from './components/blog';
import Video from './components/video';
import Gallery from './components/gallery';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <React.Fragment>
      <header>
          <Navbar/>
      </header>
      <main>
      <Home />
      <Benefit />
      <About />
      <Blog />
      <Video />
      <Gallery />
      <Contact />
      </main>
      <footer>
         <Footer/>
      </footer>
      
    </React.Fragment>
  );
}

export default App;
