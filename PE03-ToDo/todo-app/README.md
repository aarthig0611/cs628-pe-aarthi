# PE03 - ToDo App

## Input

The app allows users to enter a task description in an input field. When the “Add Task” button is clicked, the task is captured from the input field and stored in the application’s state using the useState hook. Additionally, each task has a “Delete” button that allows users to remove tasks when clicked.

## Process

The program processes the input using React’s state management. The useState hook maintains the list of tasks, and event handlers manage user interactions. When a user adds a task, it updates the state, and the map() function dynamically renders the updated task list. Similarly, when a user deletes a task, the state is updated by filtering out the selected task.

## Output

The tasks are displayed as a list below the input field. Each task has a delete button, enabling users to remove unwanted tasks. The UI updates dynamically based on state changes, providing a seamless user experience.