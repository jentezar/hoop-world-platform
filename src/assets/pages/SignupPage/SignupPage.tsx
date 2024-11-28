import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const SignupPage: React.FC = () => {
  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <Authenticator>
        {({ signOut, user }) => (
          <div>
            <h2>Welcome, {user?.username}</h2>
            <button onClick={signOut}>Sign out</button>
          </div>
        )}
      </Authenticator>
    </div>
  );
};

export default SignupPage;
