import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

function AddCity({ addCity }) {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [population, setPopulation] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !country || !population) return;

        addCity({ name, country, population });
        navigate('/cities');
    };

    return (
        <div className="container">
            <h2>Add City</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="City Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} required />
                <input type="number" placeholder="Population" value={population} onChange={(e) => setPopulation(e.target.value)} required />
                <button type="submit">Add City</button>
            </form>
        </div>
    );
}

export default AddCity;