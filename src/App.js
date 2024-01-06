import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './App.css';
import Card from './SummaryCard';

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

  const [activeLocation, setActiveLocation] = useState('AB');
  const [lastUpdated, setlastUpdated] = useState(' ');
  const [summaryData, setSummaryData] = useState({});

  const baseUrl = 'https://api.opencovid.ca';
  const getVersion = async () => {
    const res = await fetch(`${baseUrl}/version`);
    const data = await res.json();
    setlastUpdated(data.timeseries);
  };
  useEffect(() => { getVersion(); }, [activeLocation]);

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
        <div className="dashboard-summary">
          <Card title="Total Cases" value={summaryData.cases} />
          <Card title="Total Tests" value={summaryData.tests_completed} />
          <Card title="Total Deaths" value={summaryData.deaths} />
          <Card title="Total Vaccinated" value={summaryData.vaccine_administration_total_doses} />
        </div>
      </div>
    </div>
  );
}

export default App;
