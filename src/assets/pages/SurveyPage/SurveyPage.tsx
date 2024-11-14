// SurveyPage.tsx
import React from 'react';
import './SurveyPage.scss';

const SurveyPage: React.FC = () => {
  return (
    <div className="survey-page-container">
      <h2 className="survey-heading">Personalized Basketball Survey</h2>
      <p className="survey-subheading">Help us get to know you better on the court!</p>
      <div className="question-container">
        <p className="question-text">What is your current basketball skill level?</p>
        <input
          type="text"
          placeholder="Enter your answer here..."
          className="answer-input"
        />
        <button className="submit-button">Next</button>
      </div>
    </div>
  );
};

export default SurveyPage;
