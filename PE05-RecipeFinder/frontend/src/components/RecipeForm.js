import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/styles.css";

function RecipeForm() {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://fantastic-robot-rq964r9pvjwfpx6r-5050.app.github.dev/record", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, ingredients: ingredients.split(","), instructions }),
        }).then(() => navigate("/"));
    };

    return (
        <div> 
            <h2 className="recipe-list-heading">Add Recipe</h2>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" placeholder="Recipe Name" onChange={(e) => setName(e.target.value)} required className="input" />
                <input type="text" placeholder="Ingredients (comma separated)" onChange={(e) => setIngredients(e.target.value)} required className="input" />
                <textarea placeholder="Instructions" onChange={(e) => setInstructions(e.target.value)} required className="textarea" />
                <button type="submit" className="button">Add Recipe</button>
            </form>
        </div>
    );
}

export default RecipeForm;