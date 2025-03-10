import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../style/styles.css";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    // Function to fetch recipes
    const fetchRecipes = () => {
        fetch("https://fantastic-robot-rq964r9pvjwfpx6r-5050.app.github.dev/record")
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(err => console.error("Error fetching recipes:", err));
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    return (
        <div className="recipe-list-container">
            <h2 className="recipe-list-heading">Recipe List</h2>
            <div className="recipe-list">
                {recipes.map((recipe) => (
                    <div key={recipe._id} className="recipe-card">
                        <h3>{recipe.name}</h3>
                        <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
                        <Link to={`/recipes/${recipe._id}`} className="view-details-btn">View Details</Link>
                    </div>
                ))}
            </div>
            <Outlet context={{ fetchRecipes }} />  {/* Pass fetchRecipes to child components */}
        </div>
    );
};

export default RecipeList;