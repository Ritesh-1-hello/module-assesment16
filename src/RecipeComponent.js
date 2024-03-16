import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style/RecipeStyles.css";

const RecipeComponent = () => {
  // State variables
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch recipes based on the query
  const fetchRecipes = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=160e359c&app_key=67a48b91de75fe5c383a6a4d27850889`
      );
      setRecipes(response.data.hits);
    } catch (error) {
      setError("Error fetching recipes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Function to handle recipe selection
  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Function to handle back button click
  const handleBack = () => {
    setSelectedRecipe(null);
  };

  // Function to handle recipe search
  const handleSearch = () => {
    fetchRecipes();
  };

  // Use effect to fetch recipes when the component mounts
  useEffect(() => {
    fetchRecipes();
  }, []);

  // Rendering based on selectedRecipe state
  if (selectedRecipe) {
    // Render recipe details
    return (
      <div>
        <button onClick={handleBack}>Back</button>
        <h2>{selectedRecipe.recipe.label}</h2>
        <img
          src={selectedRecipe.recipe.image}
          alt={selectedRecipe.recipe.label}
        />
        <h3>Ingredients:</h3>
        <ul>
          {selectedRecipe.recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.text}</li>
          ))}
        </ul>
        <h3>Nutritional Information:</h3>
        <p>Calories: {Math.round(selectedRecipe.recipe.calories)}</p>
        <p>Health Labels: {selectedRecipe.recipe.healthLabels.join(", ")}</p>
        <p>Diet Labels: {selectedRecipe.recipe.dietLabels.join(", ")}</p>
        <h3>Preparation:</h3>
        <ol>
          {selectedRecipe.recipe.digest.map((step, index) => (
            <li key={index}>{step.label}</li>
          ))}
        </ol>
      </div>
    );
  } else {
    // Render recipe search and list
    return (
      <div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for recipes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="recipe-container">
          {recipes.map((recipe) => (
            <div
              className="recipe-card"
              key={recipe.recipe.uri}
              onClick={() => handleRecipeSelect(recipe)}
            >
              <h3 className="recipe-title">{recipe.recipe.label}</h3>
              <img
                className="recipe-image"
                src={recipe.recipe.image}
                alt={recipe.recipe.label}
              />
              <div className="recipe-details">
                <p>Calories: {Math.round(recipe.recipe.calories)}</p>
                <p>Health Labels: {recipe.recipe.healthLabels.join(", ")}</p>
                <p>Diet Labels: {recipe.recipe.dietLabels.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default RecipeComponent;
