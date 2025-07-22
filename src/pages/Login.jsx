import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, CheckCircle } from 'lucide-react';
import './Login.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Login = () => {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

 

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle login logic here
  //   console.log('Login attempt:', formData);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
    navigate('/homepage');
  };

  return (
    <>
    <Navbar/>
    <div className="login-page">
      <div className="login-container">
        <div className="login-card-wrapper">
          {/* Header */}
          <div className="login-header">
            <div className="login-logo-wrapper">
              <div className="login-logo-circle">
                <CheckCircle className="login-logo-icon" />
              </div>
            </div>
            <h1 className="login-title">Welcome back</h1>
            <p className="login-subtitle">Sign in to your TaskFlow account</p>
          </div>

          {/* Login Form */}
          <div className="login-form-card">
            <form onSubmit={handleSubmit} className="form-space-y-6">
              <div>
                <label className="form-label">Email</label>
                <div className="input-with-icon">
                  <div className="input-icon-left">
                    <Mail className="input-icon" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input-text-icon"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="form-label">Password</label>
                <div className="input-with-icon">
                  <div className="input-icon-left">
                    <Lock className="input-icon" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="form-input-password"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="password-toggle-button"
                  >
                    {showPassword ? (
                      <EyeOff className="input-icon-hover" />
                    ) : (
                      <Eye className="input-icon-hover" />
                    )}
                  </button>
                </div>
              </div>

              <div className="form-options-row">
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <label className="checkbox-label">Remember me</label>
                </div>
                <Link to="/forgot-password" className="link-text-sm">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="submit-button"
                onSubmit={handleSubmit}
              >

                Sign In
              </button>
            </form>

            {/* Separator */}
            <div className="separator-container">
              <div className="separator-line" />
              <div className="separator-text-wrapper">
                <span className="separator-text">Or continue with</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="social-buttons-grid">
              <button className="social-button">
                <svg className="social-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="social-button-text">Google</span>
              </button>
              <button className="social-button">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="social-button-text">Facebook</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="signup-link-wrapper">
              <p className="signup-text">
                Don't have an account?{' '}
                <Link to="/signup" className="link-text-bold">
                  Sign up for free
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Login;
