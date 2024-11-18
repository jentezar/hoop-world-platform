// Login.tsx
import React from 'react';
import './LoginPage.scss';

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Log In</button>
        <button className="login-button" type="submit">Log In</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
};

export default Login;

