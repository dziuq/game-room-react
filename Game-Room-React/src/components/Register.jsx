import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "/src/styles/Register.css";
import ReCAPTCHA from "react-google-recaptcha";


const Register = () => {
    const [form, setForm] = useState({
      login: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: ''
    });
  
    const [recaptchaToken, setRecaptchaToken] = useState('');
    const [message, setMessage] = useState('');
  
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleCaptcha = (token) => {
      setRecaptchaToken(token);
      console.log('Captcha token:', token);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (form.email !== form.confirmEmail) {
        return setMessage('Email nie pasuje!');
      }
      if (form.password !== form.confirmPassword) {
        return setMessage('Hasła nie pasują!');
      }
      if (!recaptchaToken) {
        return setMessage('Zaznacz reCAPTCHA!');
      }
  
      try {
        const res = await axios.post('http://localhost:5147/Auth/register', {
          login: form.login,
          email: form.email,
          confirmEmail: form.confirmEmail,
          password: form.password,
          confirmPassword: form.confirmPassword,
          recaptchaToken
        });
        setMessage(res.data.message || 'Zarejestrowano!');
        setForm({ login: '', email: '', confirmEmail: '', password: '', confirmPassword: '' });
        setRecaptchaToken('');
      } catch (err) {
        setMessage(err.response?.data?.message || 'Błąd rejestracji.');
      }
    };
  

    return (
        <div className="register-container">
          <h1 className="logo-text">GAME ROOM</h1>
          <h2 className="form-title">REGISTER</h2>
          <form onSubmit={handleSubmit} className="register-form">
          {message && <p className="red-message">{message}</p>}
            <label>LOGIN</label>
            <input name="login" value={form.login} onChange={handleChange} required />
    
            <label>EMAIL</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
            <div className="row">
              <div>
                <label>CONFIRM EMAIL</label>
                <input type="email" name="confirmEmail" value={form.confirmEmail} onChange={handleChange} required />
              </div>
            </div>
            <div className="row">
              <div>
                <label>PASSWORD</label>
                <input type="password" name="password" value={form.password} onChange={handleChange} required />
              </div>
            </div>
    
            <div className="row">
              <div>
                <label>CONFIRM PASSWORD</label>
                <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
              </div>
            </div>
            <div className="captcha-wrapper">
            <ReCAPTCHA
                sitekey="6Le02gYrAAAAAC-TdEgEYepoA_JSthuRNx7NHX9B"
                onChange={handleCaptcha}
                theme="dark"
            />
            </div>
            <button type="submit">SIGN UP </button>
          </form>
        </div>
      );
};

export default Register;