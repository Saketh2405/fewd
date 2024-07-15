import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = '61a1d8419f9d307924240958d89e284d';

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    setWeather(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      setWeather(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === '') {
      setError(new Error('City name cannot be empty'));
      return;
    }
    fetchWeather();
  };

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Get Weather</button>
      </form>
      {loading && <p>Loading weather...</p>}
      {error && <p>Error fetching weather: {error.message}</p>}
      {weather && (
        <div>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default App;
