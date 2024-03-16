import React from "react";
import "./style/UserDashboardStyles.css";

const UserDashboardComponent = ({ user }) => {
 
  const searchHistory = ["Pizza", "Pasta", "Salad"];
  const favoriteRecipes = [
    "Spaghetti Carbonara",
    "Chicken Alfredo",
    "Caesar Salad",
  ];

  return (
    <div className="dashboard-container">
      <h2 className="welcome-message">Welcome, {user}!</h2>
      <div className="section">
        <h3 className="section-title">Search History:</h3>
        <ul className="list">
          {searchHistory.map((item, index) => (
            <li className="list-item" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h3 className="section-title">Favorite Recipes:</h3>
        <ul className="list">
          {favoriteRecipes.map((item, index) => (
            <li className="list-item" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDashboardComponent;
