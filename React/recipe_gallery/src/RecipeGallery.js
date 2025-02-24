import React from "react";
import "./RecipeGallery.css";
import { recipes } from "./recipes";

const RecipeGallery = () => {
  return (
    <div className="gallery-container">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <img src={recipe.image} alt={recipe.title} className="recipe-image" />
          <h2 className="recipe-title">{recipe.title}</h2>
          <h3>Ingredients:</h3>
          <ul className="recipe-ingredients">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RecipeGallery;
