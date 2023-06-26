import React, { useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
  };

  const center = {
    lat: 37.7749, // Example latitude for the initial map center
    lng: -122.4194, // Example longitude for the initial map center
  };

  const driverLocation = {
    lat: 37.7749, // Example driver's latitude
    lng: -122.4194, // Example driver's longitude
  };

  const customerLocations = [
    {
      id: 1,
      lat: 37.773972, // Example customer's latitude
      lng: -122.431297, // Example customer's longitude
    },
    // Add more customer locations as needed
  ];

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13} // Adjust the initial zoom level as needed
        center={center}
      >
        <Marker position={driverLocation} />

        {customerLocations.map((location) => (
          <Marker key={location.id} position={{ lat: location.lat, lng: location.lng }} />
        ))}
      </GoogleMap>
    </div>
  );
};

const Login = ({ onLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOTP] = useState('');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleOTPChange = (event) => {
    setOTP(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform OTP verification here
    const testOTP = '123456'; // Default test OTP value

    if (otp === testOTP) {
      onLogin();
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Phone Number:</label>
          <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} required />
        </div>
        <div>
          <label>OTP:</label>
          <input type="text" value={otp} onChange={handleOTPChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Map />
      )}
    </div>
  );
};

export default App;

