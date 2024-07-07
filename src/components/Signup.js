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
    const [passwordError, setPasswordError] = useState([]);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setFormData({ ...formData, password });
    
        const errors = [];
        if (password.length < 8) {
            errors.push("At least 8 characters long");
        }
        if (!/[a-z]/.test(password)) {
            errors.push("At least one lowercase letter");
        }
        if (!/[A-Z]/.test(password)) {
            errors.push("At least one uppercase letter");
        }
        if (!/\d/.test(password)) {
            errors.push("At least one number");
        }
        if (!/[@$!%*?&]/.test(password)) {
            errors.push("At least one special character (@$!%*?&)");
        }
        setPasswordError(errors);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        if (passwordError.length > 0) {
            alert("Password does not meet the required criteria");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/users/signup', formData);
            alert(response.data.message);
            navigate('/login'); // Redirect to login page after successful signup
        } catch (error) {
            alert('Error registering user');
            // console.log(error);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formWrapper}>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <h2 style={styles.heading}>Sign Up</h2>
                    <p style={styles.message}>Create an account to enjoy our services.</p>
                    <input
                        className="signup-input"
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="signup-input"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="signup-input"
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        onChange={handleChange}
                        required
                    />
                    <div className="password-section">
        <input
            className={`signup-input ${passwordError.length > 0 ? 'error-input' : ''}`}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            required
        />
        <div className="password-requirements">
            <p className="requirements-title">Password must contain:</p>
            <ul className="requirements-list">
                {[
                    "At least 8 characters long",
                    "At least one lowercase letter",
                    "At least one uppercase letter",
                    "At least one number",
                    "At least one special character (@$!%*?&)"
                ].map((requirement, index) => (
                    <li 
                        key={index} 
                        className={`requirement-item ${passwordError.includes(requirement) ? 'invalid' : 'valid'}`}
                    >
                        {passwordError.includes(requirement) ? '✗' : '✓'} {requirement}
                    </li>
                ))}
            </ul>
        </div>
    </div>
                    
                    <input
                        className="signup-input"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        required
                    />
                    <select 
                        className="signup-select"
                        name="securityQuestion" 
                        onChange={handleChange}
                    >
                        <option value="mother's maiden name">Mother's Maiden Name</option>
                        <option value="dog name">Dog Name</option>
                        <option value="car's number">Car's Number</option>
                    </select>
                    <input
                        className="signup-input"
                        type="text"
                        name="securityAnswer"
                        placeholder="Security Answer"
                        onChange={handleChange}
                        required
                    />
                    <button className="signup-button" type="submit">Sign Up</button>
                    <button className="login-button" type="button" onClick={() => navigate('/login')}>
                        Already have an account? Login
                    </button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: '100vh',
        paddingBottom: '120px',
        backgroundColor: '#1a2a3a',
        fontFamily: 'Arial, sans-serif',
        paddingTop: '80px',
    },
    formWrapper: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '20px',
        borderRadius: '12px',
        marginTop: '20px',
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
    errorInput: {
        border: '2px solid red',
    },
    errorList: {
        listStyleType: 'none',
        padding: 0,
        marginTop: '10px',
        color: 'red',
    },
    errorItem: {
        marginBottom: '5px',
    },
    passwordSection: {
        marginBottom: '20px',
    },
    passwordRequirements: {
        textAlign: 'left',
        marginTop: '10px',
        fontSize: '14px',
    },
    requirementsTitle: {
        marginBottom: '5px',
        fontWeight: 'bold',
    },
    requirementsList: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
    },
    requirementItem: {
        marginBottom: '3px',
    }
};

export default Signup;
