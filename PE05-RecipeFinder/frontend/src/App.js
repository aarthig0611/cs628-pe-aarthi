import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import RecipeForm from "./components/RecipeForm";
import EditRecipe from "./components/EditRecipe";
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<RecipeList />}>
                    <Route path="recipes/:id" element={<RecipeDetails />} />
                </Route>
                <Route path="/add" element={<RecipeForm />} />
                <Route path="/edit/:id" element={<EditRecipe />} />
            </Routes>
        </Router>
    );
}

export default App;