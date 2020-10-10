import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PartcilesSession from './session_particles'

const SignupForm = ({ clearSessionErrors, signup, errors }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [password2, setPassword2] = useState("");

  useEffect(() => {
    clearSessionErrors();
    const inputs = document.getElementsByClassName("signup-yes-errors-input");
    Array.from(inputs).forEach(input => input.className = "signup-no-errors-input");
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, name, password, password2 };
    signup(user);
  }

  const handleEmailErr = () => {
    let field = document.getElementById("signup-email");
    if (!field) return;

    if (errors.email) {
      field.className = "signup-yes-errors-input";
      return "Enter a valid email";
    } else field.className = "signup-no-errors-input";
  }

  const handleNameErr = () => {
    let field = document.getElementById("signup-name");
    if (!field) return;

    if (errors.name) {
      field.className = "signup-yes-errors-input";
      return "Name field is required";
    } else field.className = "signup-no-errors-input";
  }

  const handlePasswordErr = () => {
    let field = document.getElementById("signup-password-1");
    if (!field) return;

    if (errors.password) {
      field.className = "signup-yes-errors-input";
      return "Password must be at least 6 characters";
    } else field.className = "signup-no-errors-input";
  }

  const handlePassword2Err = () => {
    let field = document.getElementById("signup-password-2");
    if (!field) return;
    if (errors.password2) {
      field.className = "signup-yes-errors-input";
      return "Passwords must match";
    } else field.className = "signup-no-errors-input";
  }


  return (
    <div className="signup-form-container">
      < PartcilesSession />
      <form onSubmit={e => handleSubmit(e)}>
        <div className="signup-form">
          <h1>Sign up for free</h1>
          <input
            className="signup-no-errors-input"
            type="text"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
            placeholder="Email"
            id="signup-email"
          />
          <p className="signup-error">{handleEmailErr()}</p>
          <input
            className="signup-no-errors-input"
            type="text"
            value={name}
            onChange={e => setName(e.currentTarget.value)}
            placeholder="Name"
            id="signup-name"
          />
          <p className="signup-error">{handleNameErr()}</p>
          <input
            className="signup-no-errors-input"
            type="password"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
            placeholder="Password"
            id="signup-password-1"
          />
          <p className="signup-error">{handlePasswordErr()}</p>
          <input
            className="signup-no-errors-input"
            type="password"
            value={password2}
            onChange={e => setPassword2(e.currentTarget.value)}
            placeholder="Confirm Password"
            id="signup-password-2"
          />
          <p className="signup-error">{handlePassword2Err()}</p>
          <input className="submit" type="submit" value="Submit" />
          <p className="link-to-other-form">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
