import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginPage.scss';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); // Changed from useHistory

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prevState => ({
                ...prevState,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        
        if (Object.keys(validationErrors).length === 0) {
            try {
                // Add your login API call here
                console.log('Form submitted:', formData);
                navigate('/'); // Changed from history.push to navigate
            } catch (error) {
                setErrors({ submit: 'Login failed. Please try again.' });
            }
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'error' : ''}
                            aria-invalid={errors.email ? 'true' : 'false'}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                            <span className="error-message" id="email-error" role="alert">
                                {errors.email}
                            </span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={errors.password ? 'error' : ''}
                            aria-invalid={errors.password ? 'true' : 'false'}
                            aria-describedby={errors.password ? 'password-error' : undefined}
                        />
                        {errors.password && (
                            <span className="error-message" id="password-error" role="alert">
                                {errors.password}
                            </span>
                        )}
                    </div>

                    {errors.submit && (
                        <div className="error-message" role="alert">
                            {errors.submit}
                        </div>
                    )}

                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
                
                <div className="additional-options">
                    <Link to="/forgot-password">Forgot Password?</Link>
                    <Link to="/signup">Create an Account</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;