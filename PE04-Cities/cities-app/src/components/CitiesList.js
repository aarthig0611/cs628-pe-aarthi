import { Link } from 'react-router-dom';
import '../styles.css';

function Cities({ cities }) {
    return (
        <div className="container">
            <h2>Cities List</h2>
            <ul>
                {cities.map((city) => (
                    <li key={city.id}>
                        <Link to={`/cities/${city.id}`}>{city.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cities;