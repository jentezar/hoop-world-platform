import React from 'react';
import './SignupPage.scss';

const Signup: React.FC = () => {
  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <label htmlFor="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
