# PSQL-Node Backend

## Overview

This is a simple Node.js application using Express and PostgreSQL to provide CRUD functionality. The application has four routes for performing CRUD operations: register (POST), showall (GET), delete (DELETE), and update (PUT).

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd test-backend
   ```

2. Running locally:

   ```bash
   yarn
   yarn local
   ```
   or
   ```bash
   npm install
   npm run local
   ```

3. Runing on production:

   ```bash
   yarn
   yarn prod
   ```
   or
   ```bash
   npm install
   npm run prod
   ```

5. Once the app is running locally, you can access the Node.js application at [http://localhost:4000](http://localhost:4000).

## API Endpoints

- **POST /register**: Register a new entry in the COMPANY table.
- **GET /showall**: Retrieve all entries from the COMPANY table.
- **DELETE /delete**: Delete an entry from the COMPANY table.
- **PUT /update**: Update an entry in the COMPANY table.

## Testing the API

You can use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to test the API endpoints.

### Example:

- **POST /register**:

  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe","age":30,"address":"123 Main St","salary":50000,"join_date":"2024-01-24"}' http://localhost:4000/register
  ```

- **GET /showall**:

  ```bash
  curl http://localhost:4000/showall
  ```

- **DELETE /delete**:

  ```bash
  curl -X DELETE -H "Content-Type: application/json" -d '{"id":1}' http://localhost:4000/delete
  ```

- **PUT /update**:

  ```bash
  curl -X PUT -H "Content-Type: application/json" -d '{"first_name":"Updated","last_name":"User","email":"updated@example.com","mobile":"1234567890","id":1}' http://localhost:4000/update
  ```

---