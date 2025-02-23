# PE04 - Cities

## Input

The application allows users to input city details through the “Add City” form. Users provide three key pieces of information:
-	City Name (Text)
-	Country (Text)
-	Population (Number)

The input is collected using React’s useState hook and managed through controlled form elements. When the user submits the form, the data is passed to the application’s state.

## Process

Once the form is submitted, the application executes the following steps:
1.	Validation: Ensures that all fields are filled before proceeding.
2.	State Update: The new city data is added to the cities array using the useState hook in App.js.
3.	Navigation: The user is redirected to the “Cities List” page using React Router’s useNavigate.
4.	Data Retrieval: The Cities List displays the list of added cities, and clicking on a city fetches its details using useParams().

## Output

The application dynamically updates and displays:
-	A Cities List, showing all stored cities.
-	Clicking a city navigates to a City Details page, displaying the city’s country and population.
-	After adding a city, the user is redirected to the list, ensuring a seamless experience.