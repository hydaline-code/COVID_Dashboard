import React, { useState } from 'react';
import Select from 'react-select';
import './App.css';

function App() {
  // App component starts here
  const locationList = [
    { value: 'AB', label: 'Alberta' },
    { value: 'BC', label: 'British Columbia' },
    { value: 'MB', label: 'Manitoba' },
    { value: 'NB', label: 'New Brunswick' },
    { value: 'NL', label: 'Newfoundland and Labrador' },
    { value: 'NT', label: 'Northwest Territories' },
    { value: 'NS', label: 'Nova Scotia' },
    { value: 'NU', label: 'Nunavut' },
    { value: 'ON', label: 'Ontario' },
    { value: 'PE', label: 'Prince Edward Island' },
    { value: 'QC', label: 'Quebec' },
    { value: 'SK', label: 'Saskatchewan' },
    { value: 'YT', label: 'Yukon' },
  ];

  // state to store the active locations
  /* eslint-disable no-unused-vars */
  const [activeLocation, setActiveLocation] = useState('AB');
  const [lastUpdated, setlastUpdated] = useState(' ');

  // return statement goes below this
  return (
    <div className="App">
      <h1>COVID 19 Dashboard </h1>
      <div className="dashboard-container">
        <div className="dashboard-menu">
          <Select
            options={locationList}
            onChange={(selectedOption) => setActiveLocation(selectedOption.value)}
            defaultValue={locationList.filter(
              (options) => options.value === activeLocation,
            )}
            className="dasboard-select"
          />
          <p className="update-date">
            {' '}
            Last Updated :
            {lastUpdated}
          </p>
        </div>
        <div className="dashboard-summary" />
      </div>
    </div>
  );
}

export default App;
