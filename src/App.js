

import React, { useState } from "react";
import AuthenticationComponent from "./AuthenticationComponent";
import RegistrationComponent from "./RegistrationComponent";
import RecipeComponent from "./RecipeComponent"; 
import axios from "axios";
import UserDashboardComponent from "./UserDashboard";

const App = () => {
  const [user, setUser] = useState(null); 
  const [showLogin, setShowLogin] = useState(true);

  
  const handleLogin = (username, password) => {
    
    if (username === "test" && password === "123") {
      setUser(username); 
    } else {
      alert("Invalid credentials");
    }
  };

  
  const handleRegister = (username, password) => {
    
    setUser(username);
  };

 
  const goToRegister = () => {
    setShowLogin(false);
  };

 
  const goToLogin = () => {
    setShowLogin(true);
  };

  return (
    <div>
      {}
      {user ? (
        <>
          <UserDashboardComponent user={user} /> <RecipeComponent />
          {}
        </>
      ) : 
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
