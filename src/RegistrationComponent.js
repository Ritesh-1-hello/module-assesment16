

import React, { useState } from 'react';


const RegistrationComponent = ({ onRegister, goToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    onRegister(username, password);
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <p>Already have an account? <span onClick={() => goToLogin()}>Login</span></p>
    </div>
  );
};

export default RegistrationComponent;
