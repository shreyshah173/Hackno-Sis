import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        email: '',
        securityQuestion: 'mother\'s maiden name',
        securityAnswer: '',
        newPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/forgot-password', formData);
            alert(response.data.message);
        } catch (error) {
            alert('Error resetting password');
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formWrapper}>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <h2 style={styles.heading}>Forgot Password</h2>
                    <p style={styles.message}>Please enter your details to reset your password.</p>
                    <input
                        className="login-input"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />
                    <select 
                        className="login-input"
                        name="securityQuestion" 
                        onChange={handleChange}
                    >
                        <option value="mother's maiden name">Mother's Maiden Name</option>
                        <option value="dog name">Dog Name</option>
                        <option value="car's number">Car's Number</option>
                    </select>
                    <input
                        className="login-input"
                        type="text"
                        name="securityAnswer"
                        placeholder="Security Answer"
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="login-input"
                        type="password"
                        name="newPassword"
                        placeholder="New Password"
                        onChange={handleChange}
                        required
                    />
                    <button className="login-button" type="submit">Reset Password</button>
                    <div style={styles.linkContainer}>
                        <Link className="login-link" to="/login">Remembered your password? Login</Link>
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
        padding: '100px 0px',
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

export default ForgotPassword;