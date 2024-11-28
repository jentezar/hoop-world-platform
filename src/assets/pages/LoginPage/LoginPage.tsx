import { Authenticator } from '@aws-amplify/ui-react';
import React from 'react';

const LoginPage: React.FC = () => (
  <Authenticator>
    {({ signOut, user }) => (
      <div>
        <h1>Hello {user?.username}</h1>
        <button onClick={signOut}>Sign out</button>
      </div>
    )}
  </Authenticator>
);

export default LoginPage;
