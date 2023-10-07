# TasksApp 📝

Frontend was built using React with Context API and Provider for state management. It was tested using RTL (React Testing Library) and offers a user-friendly, responsive interface. It was used Bootstrap for styling, providing an interactive user experience.

The backend of the application is built using Express.js. It includes an endpoint to retrieve tasks and adds new tasks every minute. Tasks are stored in a Map object. This backend serves as a simulated API for the TasksApp frontend, allowing tasks retrieval and dynamic updates.

## Features

- Show task count by status.
- Filter tasks by completion status.
- Filter tasks by pending status.
- Paginate tasks for easier navigation.

## Installation

Make sure you have Node.js and npm installed on your system.

1. Clone the repository: `git clone git@github.com:VicSales28/tasks-app.git`
2. Navigate to the project directory: `cd tasks-app`

### tasks-backend
3. Open a terminal integrated with tasks-backend.
4. Install dependencies: `npm install`
5. Run the application: `PORT=8080 NEW_TASK_PERIOD=60000 npm start`
6. After following these steps, the backend will be running at http://localhost:8080/api/tasks/

### tasks-frontend
7. Open a terminal integrated with tasks-backend.
8. Install dependencies: `npm install`
9. Run the application: `npm start`
10. After following these steps, the frontend will be running at http://localhost:3000/home

## Usage

- Access the application through your web browser.
- Monitor the count of pending and completed tasks.
- Navigate between routes using the side menu.
- Use the filter buttons to display completed or pending tasks.
- Navigate through tasks using the pagination buttons at the bottom of the task list.

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- Bootstrap (for styling and components)
- React Router (for navigation)
- React Testing Library (for tests)

## Tests

With an integrated terminal in the frontend, you can execute a single test file using the following command:

`npm test apiRequests.test.js`

Test file names:
- apiRequests.test.js
- taskFilters.test.js
- taskOverviewCards.test.js

## Application running

<p align="center">
  <img src="https://github.com/VicSales28/tasks-app/assets/115190439/36409213-3061-4ad4-ac5b-0818674fef99" alt="Desktop Version" width="400"/>
</p>
<p align="center">
  <img src="https://github.com/VicSales28/tasks-app/assets/115190439/3bb04f5c-8f48-4d32-89eb-111f89ed3532" alt="App Version" width="500"/>
</p>
