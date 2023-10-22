# User-Management-API
The User Management API allows you to perform CRUD (Create, Read, Update, Delete) operations on a user database.

## [live demo](https://user-management-api.vedantsapalkar.repl.co/)

### Table of Contents
* Getting Started
* Endpoints
  * Get all users
  * Create a new user
  * Get a single user
  * Delete a user
  * Update a user
* Error Handling


### Getting Started
To get started with this API, clone this repository and install the necessary dependencies by running npm install. You will also need to set up a MongoDB database and add the connection string to a .env file at the root of the project.

### Endpoints
### Get all users
Request: ```GET /users```

Response:
```
Status Code: 200 OK

[
  {
    "_id": "1234567890",
    "firstName": "John",
    "lastName": "Doe",
    "age": 30,
    "__v": 0
  },
  {
    "_id": "0987654321",
    "firstName": "Jane",
    "lastName": "Doe",
    "age": 25,
    "__v": 0
  }
]
```
### Create a new user
Request:```POST /users```
 ```
 {
  "firstName": "Alice",
  "lastName": "Smith",
  "age": 28
}
```
Response: 
```
Status Code: 201 Created
{
  "message": "user Alice has been created"
}
```
### Get a single user
Request:```GET /users/:id```

Parameters: id - the unique ID of the user to retrieve

Response:
```
Status Code: 200 OK

{
  "_id": "1234567890",
  "firstName": "John",
  "lastName": "Doe",
  "age": 30,
  "__v": 0
}
```
### Delete a user
Request:```DELETE /users/:id```

Parameters: id - the unique ID of the user to delete.

Response:
```
Status Code: 200 OK

{
  "n": 1,
  "ok": 1,
  "deletedCount": 1
}
```
### Update a user
Request:```PATCH /users/:id```

Parameters: id - the unique ID of the user to update.
```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 32
}
```
Response:
```
Status Code: 200 OK

{
  "message": "user John Smith has been updated."
}
```
### Error Handling
If an error occurs while processing a request, the API will respond with an error message and the appropriate HTTP status code.

* 400 Bad Request - The request was invalid or could not be understood by the server
* 404 Not Found - The requested resource could not be found
* 500 Internal Server Error - An error occurred on the server while processing the request

In the event of an error, the response body will contain a JSON object with an error property that describes the nature of the error.

### Technologies Used
* Node.js
* Express
* MongoDB
* Mongoose

### Contributing
Contributions are welcome! Please open an issue or pull request for any changes or bug fixes.

### Development Environment Setup for Developers

### Installation
1. Clone the repository.
2. Run npm install to install all the dependencies.
3. Rename .env.example file to .env and update the MONGO_URI variable with your MongoDB connection string.

### Running the Server
1. Run npm start to start the server.
2. By default, the server will run on port 3000.

### API Endpoints
#### GET /users
Returns all the users in the database.

#### POST /users
Create a new user. The request body should contain firstName, lastName, and age fields.

#### GET /users/:id
Returns the user with the specified ID.

#### DELETE /users/:id
Deletes the user with the specified ID.

#### PATCH /users/:id
Updates the user with the specified ID. The request body should contain firstName, lastName, and age fields.

### Dependencies
1. express: For building the web server and API endpoints.
2. dotenv: For loading environment variables from the .env file.
3. mongoose: For interacting with MongoDB.

### Development
1. Run npm run dev to start the server in development mode with nodemon.
2. Use npm run lint to lint the code with ESLint.
3. Use npm run lint-fix to fix the linting errors.


### License
This project is licensed under the MIT License.
