# Project Overview

This Node.js project Assignment manages users using MongoDB with Mongoose. It provides CRUD operations through a RESTful API and includes basic authentication using a single secret key.

## Setup Instructions

1. **Clone the repository**

   - Clone the repository to your local machine:

     ```
     git clone https://github.com/gaurav12devloper/worko.ai-nodejs.git
     ```

2. **Install dependencies**

   - Install Node.js dependencies:

     ```
     npm install
     ```

3. **Set up environment variables**

   - Create a `.env` file in the root directory with the following environment variables:

     ```
        PORT=3000
        DB_URL= mongodb://localhost:27017/
        JWT_SECRET=abc123
        NODE_ENV=development
     ```

     - `PORT`: Port on which the server will run.
     - `MONGODB_URI`: URI for your MongoDB database.
     - `SECRET_KEY`: Secret key for basic authentication.
     - `NODE_ENV`: development or production

4. **Start the server**

   - Start the Node.js server:

     ```
     npm run dev
     ```

   - The server will run at `http://localhost:3000`.

## API Documentation

### Users API

- **POST /worko/user/**

  - Creates a new user.
  - Request body should contain `email`, `name`, `age`, `city`, and `zipCode`.

- **GET /worko/user/**

  - Retrieves all users.

- **GET /worko/user/:userId**

  - Retrieves a user by `userId`.

- **PUT /worko/user/:userId**

  - Updates a user by `userId`.
  - Request body can contain `email`, `name`, `age`, `city`, and `zipCode`.

- **DELETE /worko/user/:userId**

  - Soft deletes a user by `userId`.

### Running Tests

To run the tests, use the following command:
```
     npm run test
```
