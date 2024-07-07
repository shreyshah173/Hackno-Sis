import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
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
import Chat from './components/Chat';
import Formpage from './components/Formpage';
import ProfilePage from './components/profilepage'; // Import the ProfilePage component

function App() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : { loginStatus: false, name: '', email: '', phone: '' };
    });

    // New state to track if the chat is open
    const [isChatOpen, setIsChatOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    const location = useLocation();

    // Update isChatOpen based on the current path
    useEffect(() => {
        setIsChatOpen(location.pathname === '/chat');
    }, [location]);

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
                            <Route path="/" element={<><Home setUser={setUser}/> <Benefit user={user}/> <About /> <Blog /> <Video /> <Gallery /><Contact /></>} />
                            <Route path="/signup" element={<Signup setUser={setUser} />} />
                            <Route path="/login" element={<Login setUser={setUser} />} />
                            <Route path="/forgot-password" element={<ForgotPassword />} />
                            <Route path='/profile' element={<ProfilePage user={user} />} />

                            <Route path='/chat' element={<Chat user={user} />} />
                            <Route path='/Form' element={<Formpage user={user}/>} />
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </main>
                    {!isChatOpen && (
                        <footer>
                            <Footer />
                        </footer>
                    )}
                </React.Fragment>
            )}
        </React.Fragment>
    );
}

export default App;
