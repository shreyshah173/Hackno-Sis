import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import Benefit from './components/benefit';
import About from './components/about';
import Blog from './components/blog';
import Video from './components/video';
import Gallery from './components/gallery';
import Contact from './components/contact';
import Footer from './components/footer';
import Load from './components/load';
import Signup from './components/Signup';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Chatbox from './components/Chatbox'; // Import the Chatbox component

function App() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : { loginStatus: false, name: '', email: '', phone: '' };
    });

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <React.Fragment>
            {loading ? (
                <Load />
            ) : (
                <React.Fragment>
                    <header>
                        <Navbar user={user} setUser={setUser} />
                    </header>
                    <main>
                        <Routes>
                            <Route path="/" element={<><Home /> <Benefit /> <About /> <Blog /> <Video /> <Gallery /> <Contact /></>} />
                            <Route path="/signup" element={<Signup setUser={setUser} />} />
                            <Route path="/login" element={<Login setUser={setUser} />} />
                            <Route path="/forgot-password" element={<ForgotPassword />} />
                            <Route path="/chat" element={<Chatbox user={user} />} /> {/* Route for Chatbox component */}
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
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


// below is the prompt

// give me code for frontend app.jsx and chatpage.jsx which will have the structure of an AI chat box and update the route in app.jsx if the user is login in then the he can access this chatpage 
// the app.jsx i am using is 
// ```
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Home from './components/home';
// import Navbar from './components/navbar';
// import Benefit from './components/benefit';
// import About from './components/about';
// import Blog from './components/blog';
// import Video from './components/video';
// import Gallery from './components/gallery';
// import Contact from './components/contact';
// import Footer from './components/footer';
// import Load from './components/load';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import ForgotPassword from './components/ForgotPassword';

// function App() {
//     const [loading, setLoading] = useState(true);
//     const [user, setUser] = useState(() => {
//         const savedUser = localStorage.getItem('user');
//         return savedUser ? JSON.parse(savedUser) : { loginStatus: false, name: '', email: '', phone: '' };
//     });

//     useEffect(() => {
//         setTimeout(() => {
//             setLoading(false);
//         }, 2000);
//     }, []);

//     useEffect(() => {
//         localStorage.setItem('user', JSON.stringify(user));
//     }, [user]);

//     return (
//             <React.Fragment>
//                 {loading ? (
//                     <Load />
//                 ) : (
//                     <React.Fragment>
//                         <header>
//                             <Navbar user={user} setUser={setUser} />
//                         </header>
//                         <main>
//                             <Routes>
//                                 <Route path="/" element={<><Home /> <Benefit /> <About /> <Blog /> <Video /> <Gallery /> <Contact /></>} />
//                                 <Route path="/signup" element={<Signup setUser={setUser} />} />
//                                 <Route path="/login" element={<Login setUser={setUser} />} />
//                                 <Route path="/forgot-password" element={<ForgotPassword />} />
//                                 <Route path="*" element={<Navigate to="/" />} />
//                             </Routes>
//                         </main>
//                         <footer>
//                             <Footer />
//                         </footer>
//                     </React.Fragment>
//                 )}
//             </React.Fragment>
//     );
// }

// export default App;
// ```