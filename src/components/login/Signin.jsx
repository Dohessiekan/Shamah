import React, { useState } from "react";
import "./Sign.css";
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/Home')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const renderErrorMessage = (name) => (
    name === errorMessages.name && <div className="error">{errorMessages.message}</div>
  );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email</label>
          <input onChange={handleInputChange} type="email" name="email" required />
          {renderErrorMessage("email")}
        </div>
        <div className="input-container">
          <label>Password</label>
          <input onChange={handleInputChange} type="password" name="password" required />
          {renderErrorMessage("password")}
        </div>
        <Link to='/signup' className='underline'>Sign Up</Link>
        <div className="button-container">
          <input type="submit" value="Sign In" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Signin;
