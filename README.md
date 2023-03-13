# user-management-api
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

### License
This project is licensed under the MIT License.
