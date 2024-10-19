TASKFLOW
To-Do List Web Application
This is a simple task management web application built using Angular. It allows users to manage their daily tasks efficiently with features like task creation, editing, prioritization, and sorting based on due dates.

Features
-User Authentication: Users can sign in to their personal dashboard using local storage to store the information.
-Task Creation: Add new tasks with relevant details such as title, description, due date, and priority.
-Task Completion: Mark tasks as complete by clicking on the "Complete" button next to each task.
-Task Editing: Edit tasks after creation by clicking the edit button to modify the task details.
-Priority-based Highlighting: Tasks are displayed with background colors based on their priority level.
-Due Date Sorting: Tasks are automatically sorted, with the nearest due date shown first.

Project Structure
src/
├── app/
│ ├── login/ # Login page
│ ├── dashboard/ # Dashboard with the to-do list
│ ├── landing-page/ # Describes key features of the website
│ ├── layout # Slayout components (footer, header)
│ └── app.component.ts # Main application component
├── assets/ # Static assets such as images.
├── environments/ # Configuration for development and production environments
├── index.html # Main HTML file
└── styles.css # Global styles

Technologies Used
-Angular
-TypeScript
-CSS
-HTML

Future Enhancements
-Add a reminder/notification system for due tasks.
-Support for recurring tasks.
-Add dark mode for better user experience.

PROJECT LINK:
https://taskflowzn.netlify.app/
