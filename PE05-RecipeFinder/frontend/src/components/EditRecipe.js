import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../style/styles.css";

const EditRecipe = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({ name: "", ingredients: "", instructions: "" });

    useEffect(() => {
        fetch(`https://fantastic-robot-rq964r9pvjwfpx6r-5050.app.github.dev/record/${id}`)
            .then(res => res.json())
            .then(data => setRecipe(data))
            .catch(err => console.error("Error fetching recipe:", err));
    }, [id]);

    const handleChange = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://fantastic-robot-rq964r9pvjwfpx6r-5050.app.github.dev/record/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(recipe),
        })
        .then(() => navigate("/"))
        .catch(err => console.error("Error updating recipe:", err));
    };

    return (
        <div className="container">
            <h2 className="heading">Edit Recipe</h2>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" name="name" value={recipe.name} onChange={handleChange} required className="input" />
                <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} required className="textarea" />
                <textarea name="instructions" value={recipe.instructions} onChange={handleChange} required className="textarea" />
                <button type="submit" className="button">Update Recipe</button>
            </form>
        </div>
    );
};

export default EditRecipe;