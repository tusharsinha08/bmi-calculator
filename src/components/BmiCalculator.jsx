import React, { useState } from 'react';
import './bmiCalculator.css';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBmi = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    } else {
      setBmi(null);
    }
  };

  return (
    <div className="bmi-container">
      <h2>BMI Calculator</h2>
      <div className="input-container">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBmi}>Calculate BMI</button>
      {bmi && (
        <div className="bmi-result">
          <h3>Your BMI is: {bmi}</h3>
          <p>
            Interpretation:
            {bmi < 18.5
              ? ' Underweight'
              : bmi >= 18.5 && bmi < 24.9
              ? ' Normal weight'
              : bmi >= 25 && bmi < 29.9
              ? ' Overweight'
              : ' Obesity'}
          </p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
