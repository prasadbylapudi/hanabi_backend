

## Tech Stack

- **NestJS**: A progressive Node.js framework for building efficient, scalable server-side applications.
- **MongoDB**: A NoSQL database for storing user form data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **Express.js**: A popular Node.js web application framework for routing and handling HTTP requests.
- **React**: A JavaScript library for building user interfaces.
- **React Router**: A library for handling routing in React applications.
- **Material-UI**: A popular React UI framework for designing modern and responsive user interfaces.

# Form Submission API

This is a RESTful API for submitting and retrieving user form data.

## Endpoints

### Submit Form

- **Endpoint:** `/form/submit`
- **Method:** `POST`
- **Description:** Submit a new user form.
- **Request Body:**
  - `username` (string, required): User's username.
  - `name` (string, required): User's name.
  - `email` (string, required): User's email address.
  - `phoneNumber` (string, required): User's phone number.
  - `dateOfBirth` (string, optional): User's date of birth.
- **Response:**
  - `message` (string): Success message.
  - `data` (object): Saved form data.

### Get User by Username

- **Endpoint:** `/form/:username`
- **Method:** `GET`
- **Description:** Retrieve user form data by username.
- **Parameters:**
  - `username` (string, required): User's username.
- **Response:**
  - `data` (object): User form data.
  - `error` (string): Error message (if user not found).

### Update Form

- **Endpoint:** `/form/:username`
- **Method:** `PUT`
- **Description:** Update an existing user form.
- **Parameters:**
  - `username` (string, required): User's username.
- **Request Body:**
  - `name` (string, required): User's updated name.
  - `email` (string, required): User's updated email address.
  - `phoneNumber` (string, required): User's updated phone number.
  - `dateOfBirth` (string, optional): User's updated date of birth.
- **Response:**
  - `message` (string): Success message.
  - `data` (object): Updated form data.
  - `error` (string): Error message (if user not found).



## Usage

To run the API and the React frontend locally, follow these steps:

1. Clone the repository.
2. Install dependencies for the server and the client.
3. Configure your MongoDB connection in the server's configuration.
4. Run the server and the React application.
5. Access the web application in your browser.


