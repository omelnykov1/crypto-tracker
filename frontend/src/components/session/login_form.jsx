import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { login, clearSessionErrors } from "../../actions/session_actions";
import ParticlesSession from './session_particles';
import { useDispatch, useSelector } from 'react-redux';

const LoginForm = () => {
  const errors = useSelector(state => state.errors.session);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const demoUser = {
    email: "crypto@crypto.com",
    password: "demo123",
  };

  useEffect(() => {
    const eles = document.getElementsByClassName("login-yes-errors-input");
    Array.from(eles).forEach(ele => ele.className = "login-no-errors-input");

    return () => dispatch(clearSessionErrors());
  },[]);

  const handleDemo = () => dispatch(login(demoUser));

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(login(user));
  }

  const handleEmailErr = () => {
    const field = document.getElementById("login-email");
    if (!field) return;

    if (errors.email) {
      field.className = "login-yes-errors-input1";
      return errors.email;
    } else field.className = "login-no-errors-input1";
  }

  const handlePasswordErr = () => {
    const field = document.getElementById("login-password");
    if (!field) return;

    if (errors.password) {
      field.className = "login-yes-errors-input1";
      return errors.password;
    } else field.className = "login-no-errors-input1";
  };

  return (
    <div className="login-form-container">
      <ParticlesSession />
      <div className="login-form1">
        <h1>Welcome Back!</h1>
        <form onSubmit={handleSubmit}>
          <input
            id="login-email"
            className="login-no-errors-input1"
            type="text"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
            placeholder="Email"
          />
          <p className="signup-error">{handleEmailErr()}</p>
          <input
            id="login-password"
            type="password"
            className="login-no-errors-input1"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
            placeholder="Password"
          />
          <p className="signup-error">{handlePasswordErr()}</p>
          <input className="submit" type="submit" value="Submit" />
        </form>
        <button className="demo-button" onClick={() => handleDemo()}>Demo</button>
        <p className="link-to-other-form">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;