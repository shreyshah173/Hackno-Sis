import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', formData);
            setUser({ loginStatus: true, ...response.data.user });
            alert(response.data.message);
            navigate('/'); // Navigate to the home page
        } catch (error) {
            alert('Password or email check karo bhai!!!');
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formWrapper}>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <h2 style={styles.heading}>Login</h2>
                    <p style={styles.message}>Welcome back! Please login to your account.</p>
                    <input
                        className="login-input"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="login-input"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />
                    <button className="login-button" type="submit">Login</button>
                    <div style={styles.linkContainer}>
                        <Link className="login-link" to='/signup'>Not registered yet? Sign up</Link>
                        <Link className="login-link" to='/forgot-password'>Forgot password?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#1a2a3a', // Deep navy blue
        fontFamily: 'Arial, sans-serif',
    },
    formWrapper: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '20px',
        borderRadius: '12px',
    },
    form: {
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px',
        width: '350px',
        textAlign: 'center',
    },
    heading: {
        marginBottom: '20px',
        color: '#333',
        fontSize: '28px',
        fontWeight: 'bold',
    },
    message: {
        marginBottom: '30px',
        color: '#666',
        fontSize: '16px',
    },
    linkContainer: {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
};

export default Login;
