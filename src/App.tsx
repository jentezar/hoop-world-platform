import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import HomePage from './assets/pages/HomePage/HomePage';
import MerchPage from './assets/pages/MerchPage/MerchPage';
import CommunityPage from './assets/pages/CommunityPage/CommunityPage';
import DrillsPage from './assets/pages/DrillsPage/DrillsPage';
import CardsPage from './assets/pages/CardsPage/CardsPage';
import Navbar from './assets/components/Navbar/Navbar';
import Login from './assets/pages/LoginPage/LoginPage';
import Signup from './assets/pages/SignupPage/SignupPage';
import AddToCart from './assets/pages/AddToCart/AddToCart';
import HooperBot from './assets/pages/HooperBot/HooperBot';
import SurveyPage from './assets/pages/SurveyPage/SurveyPage';
import '@aws-amplify/ui-react/styles.css'; // Import Amplify UI styles

function App() {
  return (
    <>
      <Navbar />
      <Authenticator>
        {({ signOut, user }) => (
          <>
            <div style={{ textAlign: 'center', margin: '10px' }}>
              <h3>Welcome, {user?.username}!</h3>
              <button onClick={signOut} style={{ marginBottom: '10px' }}>
                Sign Out
              </button>
            </div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/merch" element={<MerchPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/drills" element={<DrillsPage />} />
              <Route path="/cards" element={<CardsPage />} />
              <Route path="/addToCart" element={<AddToCart />} />
              <Route path="/hooperBot" element={<HooperBot />} />
              <Route path="/survey" element={<SurveyPage />} />
            </Routes>
          </>
        )}
      </Authenticator>
    </>
  );
}

export default App;