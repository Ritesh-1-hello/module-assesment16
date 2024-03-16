
import React, { useState } from 'react';
import './styles.css';

const AuthenticationComponent = ({ onLogin, onRegister, goToRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = () => {
    onLogin(username, password);
  };

  const handleRegister = () => {
    onRegister(username, password);
  };

  return (
    <div>
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
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
      {isRegistering ? (
        <>
          <button onClick={handleRegister}>Register</button>
          <p>Already have an account? <span onClick={() => setIsRegistering(false)}>Login</span></p>
        </>
      ) : (
        <>
          <button onClick={handleLogin}>Login</button>
          <p>Don't have an account? <span onClick={() => setIsRegistering(true)}>Register</span></p>
        </>
      )}
      <p onClick={() => goToRegister()}>Go to Register</p>
    </div>
  );
};

export default AuthenticationComponent;
