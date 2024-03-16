// UserDashboardComponent.js

import React from 'react';

const UserDashboardComponent = ({ user }) => {
  // Placeholder data for search history and favorite recipes
  const searchHistory = ['Pizza', 'Pasta', 'Salad'];
  const favoriteRecipes = ['Spaghetti Carbonara', 'Chicken Alfredo', 'Caesar Salad'];

  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <h3>Search History:</h3>
      <ul>
        {searchHistory.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Favorite Recipes:</h3>
      <ul>
        {favoriteRecipes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboardComponent;
