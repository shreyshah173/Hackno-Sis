import React, { useState, useEffect } from 'react';
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
import Load from './components/load'; // Import the Load component

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay to showcase the loading state
        setTimeout(() => {
            setLoading(false); // Set loading to false after some time (simulating content loaded)
        }, 2000); // Adjust the time as needed
    }, []);

    return (
        <React.Fragment>
            {loading ? (
                // Display the loading spinner while loading is true
                <Load />
            ) : (
                // Render the main content when loading is false
                <React.Fragment>
                    <header>
                        <Navbar />
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
                        <Footer />
                    </footer>
                </React.Fragment>
            )}
        </React.Fragment>
    );
}

export default App;
