import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = ({ setUser }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        securityQuestion: 'mother\'s maiden name',
        securityAnswer: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/users/signup', formData);
            alert(response.data.message);
        } catch (error) {
            alert('Error registering user');
            console.log(error);
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.heading}>Signup</h2>
                <p style={styles.message}>Create an account to enjoy our services.</p>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
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
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                Select a security question:
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
                <button type="submit" style={styles.button}>Signup</button>
                <button type="button" style={styles.loginButton} onClick={() => navigate('/login')}>
                    Already have an account? Login
                </button>
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
        marginTop: '60px',
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
        marginBottom: '10px',
    },
    loginButton: {
        width: '100%',
        padding: '10px',
        backgroundColor: 'white',
        color: '#007BFF',
        border: '2px solid #007BFF',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default Signup;
