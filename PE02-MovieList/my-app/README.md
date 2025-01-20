# PE02 - Movie List

## Input

The program accepts a predefined list of movie objects within the MovieList component. Each object includes three attributes: title, genre, and releaseYear. Additionally, it takes user interaction as input, such as selecting a genre from a dropdown menu or clicking on a movie item.

## Process

1. **Genre Filtering**: The application generates a list of unique genres from the movie data, including an “All Genres” option.
2.	**Filtering Logic**: When a user selects a genre, the program dynamically filters the movie list to display only movies that match the selected genre. If “All Genres” is selected, the entire list is displayed.
3.	**Event Handling**: Clicking on a movie triggers an alert displaying the selected movie’s title.
4.	**State Management**: The app leverages React’s useState hook to manage the currently selected genre and dynamically update the filtered movie list.

## Output

The program outputs a styled movie list interface that displays each movie’s title, genre, and release year as individual items. It allows users to filter movies by genre and interact with individual movie entries through click events.