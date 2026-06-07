Personal Task Manager
Project Title & Brief Description
Exercise Chosen: Exercise 1 – Personal Task Manager

This project is a full-stack Personal Task Manager application built using React, Node.js, Express, and MongoDB. The application allows users to create, view, edit, update, complete, and delete tasks. Users can filter tasks by status, search tasks by title, view active/completed task counts, and identify overdue tasks through visual indicators. The project focuses on implementing clean CRUD functionality, responsive UI design, and a maintainable full-stack architecture.

Live Demo Links
Frontend (Vercel)

https://studio-graphene-assessment-rho.vercel.app/

Backend API (Render)

https://studio-graphene-assessment.onrender.com/api/tasks

GitHub Repository

https://github.com/ayushsri-17/Studio-Graphene-Assessment

Tech Stack
Frontend

React

Component-based architecture
State management using React Hooks (useState, useEffect)

Axios

Handles communication between frontend and backend APIs

CSS

Custom responsive styling and UI design
Backend

Node.js

JavaScript runtime for server-side development

Express.js

REST API development and routing

MongoDB Atlas

Cloud-hosted NoSQL database

Mongoose

Schema modeling and validation for MongoDB

CORS

Enables frontend-backend communication

Dotenv

Secure environment variable management

Nodemon

Development server auto-restart
Deployment

Vercel

Frontend hosting

Render

Backend hosting
Features
Core Features
Create new tasks
View all tasks
Edit existing tasks
Delete tasks with confirmation
Mark tasks as complete/incomplete
Filter tasks by:
All
Active
Completed
Additional Features
Search tasks by title
Active task count
Completed task count
Overdue task highlighting
Empty state UI
Responsive design
How to Run Locally
Prerequisites
Node.js installed
MongoDB Atlas account or local MongoDB instance
Clone Repository
git clone https://github.com/ayushsri-17/Studio-Graphene-Assessment.git
cd Studio-Graphene-Assessment/Task-Manager
Backend Setup
cd server
npm install

Create a .env file inside the server directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string

Start the backend:

npm run dev

Backend will run on:

http://localhost:5000
Frontend Setup

Open a new terminal:

cd client
npm install
npm run dev

Frontend will run on:

http://localhost:5173
API Documentation
Get All Tasks

Method

GET

Endpoint

/api/tasks

Response

[
  {
    "_id": "123",
    "title": "Learn React",
    "description": "Practice Hooks",
    "dueDate": "2026-06-10T00:00:00.000Z",
    "completed": false
  }
]
Create Task

Method

POST

Endpoint

/api/tasks

Request Body

{
  "title": "Learn React",
  "description": "Practice Hooks",
  "dueDate": "2026-06-10"
}

Response

{
  "_id": "123",
  "title": "Learn React",
  "description": "Practice Hooks",
  "dueDate": "2026-06-10T00:00:00.000Z",
  "completed": false
}
Update Task

Method

PUT

Endpoint

/api/tasks/:id

Request Body

{
  "title": "Updated Task",
  "description": "Updated Description",
  "dueDate": "2026-06-15",
  "completed": true
}

Response

{
  "_id": "123",
  "title": "Updated Task",
  "description": "Updated Description",
  "dueDate": "2026-06-15T00:00:00.000Z",
  "completed": true
}
Delete Task

Method

DELETE

Endpoint

/api/tasks/:id

Response

{
  "message": "Task deleted successfully"
}
Project Structure
Task-Manager
│
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskList.jsx
│   │   │
│   │   ├── services
│   │   │   └── taskService.js
│   │   │
│   │   ├── App.jsx
│   │   └── App.css
│   │
│   └── package.json
│
├── server
│   ├── controllers
│   │   └── taskController.js
│   │
│   ├── models
│   │   └── Task.js
│   │
│   ├── routes
│   │   └── taskRoutes.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .gitignore
│
└── README.md
Folder Overview
components → Reusable React UI components
services → API communication layer
controllers → Backend business logic
models → MongoDB schemas
routes → Express route definitions