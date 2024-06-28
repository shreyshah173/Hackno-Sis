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
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.heading}>Forgot Password</h2>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <select name="securityQuestion" onChange={handleChange} style={styles.input}>
                    <option value="mother's maiden name">Mother's Maiden Name</option>
                    <option value="dog name">Dog Name</option>
                    <option value="car's number">Car's Number</option>
                </select>
                <input
                    type="text"
                    name="securityAnswer"
                    placeholder="Security Answer"
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    name="newPassword"
                    placeholder="New Password"
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Reset Password</button>
                <Link to="/login" style={styles.loginLink}>Remembered your password? Login</Link>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        marginTop: '50px',
        backgroundColor: '#c4e3ff',
    },
    form: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        border: '2px solid #007BFF',
        width: '300px',
        textAlign: 'center',
    },
    heading: {
        marginBottom: '10px',
        color: '#007BFF',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
    },
    loginLink: {
        display: 'block',
        marginTop: '10px',
        color: '#007BFF',
        textDecoration: 'none',
    },
};

export default ForgotPassword;
