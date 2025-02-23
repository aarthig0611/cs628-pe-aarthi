import { Link } from 'react-router-dom';
import '../styles.css';

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/cities">Cities List</Link>
            <Link to="/add-city">Add City</Link>
        </nav>
    );
}

export default Navbar;