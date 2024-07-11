import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ user, setUser }) {
    const [scrollClass, setScrollClass] = useState('sps--abv');
    const location = useLocation();
    const isChatPage = location.pathname === '/chat';

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 0) {
                setScrollClass('sps--blw');
            } else {
                setScrollClass('sps--abv');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLogout = () => {
        setUser({ loginStatus: false, name: '', email: '', phone: '' });
    };

    return (
        <nav className={`navbar navbar-toggleable-md mb-4 top-bar navbar-static-top sps ${scrollClass}`}>
            <div className="container">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse1" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="#">Longevity<span>Ai</span></Link>
                <div className="collapse navbar-collapse" id="navbarCollapse1">
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                            <Link to={'/'} className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/benefits' ? 'active' : ''}`}>
                            <Link to={'/benefits'} className="nav-link">Benefits</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
                            <Link to={'/about'} className="nav-link">About</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/gallery' ? 'active' : ''}`}>
                            <Link to={'/gallery'} className="nav-link">Gallery</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                            <Link to={'/contact'} className="nav-link">Contact</Link>
                        </li>
                        {user.loginStatus && (
                            <>
                                <li className={`nav-item ${location.pathname === '/chat' ? 'active' : ''}`}>
                                    <Link className="nav-link" to="/chat">Chat</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" onClick={handleLogout}>Logout</Link>
                                </li>
                                <li className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`}>
                                    <Link className="nav-link" to="/profile">Profile</Link>
                                </li>
                                <div className="nav-item nav-link">
                                    Hi, <b>{user.name}</b>
                                </div>
                            </>
                        )}
                        {!user.loginStatus && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
