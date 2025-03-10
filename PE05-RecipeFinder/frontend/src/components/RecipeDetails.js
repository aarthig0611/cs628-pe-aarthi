import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import "../style/styles.css";

const RecipeDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const { fetchRecipes } = useOutletContext();  // Get fetchRecipes from Outlet

    useEffect(() => {
        fetch(`https://fantastic-robot-rq964r9pvjwfpx6r-5050.app.github.dev/record/${id}`)
            .then(res => res.json())
            .then(data => setRecipe(data))
            .catch(err => console.error("Error fetching recipe:", err));
    }, [id]);

    const handleDelete = () => {
        fetch(`https://fantastic-robot-rq964r9pvjwfpx6r-5050.app.github.dev/record/${id}`, { method: "DELETE" })
            .then(() => {
                fetchRecipes();  // Refresh the list after deleting
                navigate("/");
            })
            .catch(err => console.error("Error deleting recipe:", err));
    };

    if (!recipe) return <p className="loading-text">Loading...</p>;

    return (
        <div className="container">
            <h2 className="heading">{recipe.name}</h2>
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <button onClick={() => navigate(`/edit/${id}`)} className="button">Edit</button>
            <button onClick={handleDelete} className="button delete-button">Delete</button>
        </div>
    );
};

export default RecipeDetails;