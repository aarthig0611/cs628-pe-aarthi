import { useParams } from 'react-router-dom';
import '../styles.css';

function CityDetails({ cities }) {
    const { id } = useParams();
    const city = cities.find((city) => city.id.toString() === id);

    if (!city) {
        return <h2>City not found!</h2>;
    }

    return (
        <div className="container city-details">
            <h2>{city.name} Details</h2>
            <p><strong>Country:</strong> {city.country}</p>
            <p><strong>Population:</strong> {city.population}</p>
        </div>
    );
}

export default CityDetails;