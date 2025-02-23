import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cities from './components/CitiesList';
import AddCity from './components/AddCity';
import CityDetails from './components/CityDetails';
import { useState } from 'react';
import './styles.css';

function App() {
    const [cities, setCities] = useState([
        { id: 1, name: 'Seattle', country: 'USA', population: 733919 }
    ]);

    const addCity = (newCity) => {
        setCities([...cities, { id: cities.length + 1, ...newCity }]);
    };

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cities" element={<Cities cities={cities} />} />
                <Route path="/add-city" element={<AddCity addCity={addCity} />} />
                <Route path="/cities/:id" element={<CityDetails cities={cities} />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;