import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = ({ setUser }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/login', formData);
            setUser({ loginStatus: true, ...response.data.user });
            alert(response.data.message);
        } catch (error) {
            alert('Error logging in');
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.heading}>Login</h2>
                <p style={styles.message}>Welcome back! Please login to your account.</p>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    onChange={handleChange} 
                    required 
                    style={styles.input} 
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    onChange={handleChange} 
                    required 
                    style={styles.input} 
                />
                <button type="submit" style={styles.button}>Login</button>
                <br />
                <button style={{marginTop:'5px'}}><Link to={'/signup'}>Wait what!! you didn't sign up yet!</Link></button>
                <button style={{marginTop:'5px'}}><Link to={'/forgot-password'}>Yoo man did you forget the password !</Link></button>
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
        // marginTop: '50px',
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
    message: {
        marginBottom: '20px',
        color: '#555',
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
    },
};

export default Login;
