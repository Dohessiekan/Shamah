import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Sign.css";
import { UserAuth } from '../../context/AuthContext';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/Home')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" required />
        </div>
        <Link to='/' className='underline'>Sign in.</Link>
        <div className="button-container">
          <input type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign Up</div>
        {renderForm}
      </div>
    </div>
  );
}

export default Signup;