import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [signupData, setSignupData] = useState({ username: "", email: "", password: "" });

  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginData.username && loginData.password) {
      navigate("/"); // redirect to home
    } else {
      alert("Please enter both username and password.");
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (signupData.username && signupData.email && signupData.password) {
      setIsLogin(true);
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="forms">
      {isLogin ? (
        <form className="form1" onSubmit={handleLoginSubmit}>
          <div>
            <h2>Login</h2>
          </div>
          <div className="input-box">
            <input type="text" name="username" placeholder="Username" value={loginData.username} onChange={handleLoginChange} required />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} required />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <div className="rember-forget">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forget Password?</a>
          </div>
          <div className="button">
            <button type="submit" className="btn">Login</button>
          </div>
          <div className="account">
            <label>Don't have an account?</label>
            <a href="#" onClick={toggleForm}>Register</a>
          </div>
        </form>
      ) : (
        <form className="form1" onSubmit={handleSignupSubmit}>
          <div>
            <h2>Sign Up</h2>
          </div>
          <div className="input-box">
            <input type="text" name="username" placeholder="Username" value={signupData.username} onChange={handleSignupChange} required />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input type="email" name="email" placeholder="Email" value={signupData.email} onChange={handleSignupChange} required />
            <i className='bx bxs-envelope'></i>
          </div>
          <div className="input-box">
            <input type="password" name="password" placeholder="Password" value={signupData.password} onChange={handleSignupChange} required />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <div className="button">
            <button type="submit" className="btn">Sign Up</button>
          </div>
          <div className="account">
            <label>Already have an account?</label>
            <a href="#" onClick={toggleForm}>Login</a>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginSignup;
