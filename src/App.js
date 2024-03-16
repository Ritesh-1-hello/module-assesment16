// App.js

import React, { useState } from "react";
import AuthenticationComponent from "./AuthenticationComponent";
import RegistrationComponent from "./RegistrationComponent";
import RecipeComponent from "./RecipeComponent"; // Import RecipeComponent
import axios from "axios";
import UserDashboardComponent from "./UserDashboard";

const App = () => {
  const [user, setUser] = useState(null); // State to track user authentication
  const [showLogin, setShowLogin] = useState(true);

  // Function to handle user login
  const handleLogin = (username, password) => {
    // Placeholder authentication logic
    if (username === "test" && password === "123") {
      setUser(username); // Set user upon successful login
    } else {
      alert("Invalid credentials");
    }
  };

  // Function to handle user registration
  const handleRegister = (username, password) => {
    // Placeholder registration logic
    // Upon successful registration, set the user state
    setUser(username);
  };

  // Function to switch to the registration view
  const goToRegister = () => {
    setShowLogin(false);
  };

  // Function to switch to the login view
  const goToLogin = () => {
    setShowLogin(true);
  };

  return (
    <div>
      {/* Conditional rendering based on user authentication */}
      {user ? (
        <>
          <UserDashboardComponent user={user} /> <RecipeComponent />
          {/* Render UserDashboardComponent for authenticated user */}
        </>
      ) : // Render either the login or registration component based on showLogin state
      showLogin ? (
        <AuthenticationComponent
          onLogin={handleLogin}
          onRegister={handleRegister}
          goToRegister={goToRegister}
        />
      ) : (
        <RegistrationComponent
          onRegister={handleRegister}
          goToLogin={goToLogin}
        />
      )}
    </div>
  );
};

export default App;
