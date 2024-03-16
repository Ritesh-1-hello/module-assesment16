import React, { useState } from "react";
import "./style/AuthenticationComponent.css";

const AuthenticationComponent = ({ onLogin, onRegister, goToRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = () => {
    onLogin(username, password);
  };

  const handleRegister = () => {
    onRegister(username, password);
  };

  return (
    <div className="container">
      <h2>{isRegistering ? "Register" : "Login"}</h2>
      <input
        className="input-field"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="input-field"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {isRegistering ? (
        <>
          <button className="auth-button" onClick={handleRegister}>
            Register
          </button>
          <p>
            Already have an account?{" "}
            <span
              className="toggle-link"
              onClick={() => setIsRegistering(false)}
            >
              Login
            </span>
          </p>
        </>
      ) : (
        <>
          <button className="auth-button" onClick={handleLogin}>
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <span
              className="toggle-link"
              onClick={() => setIsRegistering(true)}
            >
              Register
            </span>
          </p>
        </>
      )}
      <p className="go-to-register" onClick={() => goToRegister()}>
        Go to Register
      </p>
    </div>
  );
};

export default AuthenticationComponent;
