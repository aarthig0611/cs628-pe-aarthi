# PE05 - Recipe Finder

## Input

Users interact with the application through various forms and navigation options. They can:
-   Browse a list of recipes.
-	Add new recipes by providing details such as the name, ingredients, and cooking instructions.
-	Click on a recipe to view its details.
-	Update an existing recipe’s information.
-	Delete recipes they no longer need.

All user inputs are collected via React forms and buttons.

## Process

The frontend is built with React, utilizing React Router for navigation. User actions trigger API calls to a Node.js and Express backend, which communicates with a MongoDB Atlas database using the MongoDB Node.js driver. Key processes include:
-	Storing new recipes in the database.
-	Fetching recipe details based on user selection.
-	Updating existing recipes when users modify details.
-	Deleting recipes upon user request.

## Output

The application displays:
-	A dynamic list of recipes.
-	Detailed recipe information when selected.
-	Success or error messages based on user actions.
-	Real-time updates when recipes are added, updated, or removed.