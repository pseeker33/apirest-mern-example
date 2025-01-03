# APIREST Example

## Description
Example creating a complete API REST using Node.js, Express, MongoDB and MVC design pattern. This API allows basic CRUD operations for managing pets in an adoption platform.

## Technologies Used
- **Node.js**: Runtime environment for running JavaScript server-side.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing pet data.
- **MongoDB Atlas**: Managed cloud database service.
- **MVC Design Pattern**: Model-View-Controller pattern for organizing the application.
- **dotenv**: Package for managing environment variables.
  
## Project Structure
```
a-github/
├── config/
│   └── dbClient.js        # MongoDB connection logic
├── controllers/
│   └── pets.js            # Controller for handling pet-related requests
├── helpers/
│   (empty)                # Utility functions (if needed in the future)
├── models/
│   └── pets.js            # MongoDB schema and database operations
├── routes/
│   └── pets.js            # Routes for pet CRUD operations
├── node_modules/          # Node.js modules
├── .env                   # Environment variables (not tracked by Git)
├── .gitignore             # Git ignore file
├── app.js                 # Main entry point of the server
├── express-run-test.js    # Script for testing express server (optional)
├── package.json           # Project dependencies and scripts
├── package-lock.json      # Package lock file
└── README.md              # This file
```

## Installation

### Prerequisites:
1. **Node.js**: Ensure you have Node.js installed. You can check if it's installed by running:
   ```bash
   node -v
   ```
   If not installed, you can download it from [here](https://nodejs.org/).

2. **MongoDB Atlas Account**: You will need an active MongoDB Atlas account. Create a cluster and get your connection string.

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/apirest-mern-example.git
   ```

2. Navigate to the project directory:
   ```bash
   cd apirest-mern-example
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Set up the environment variables by creating a `.env` file in the root of the project. Use the following template:
   ```env
   USER_DB=your_mongo_user
   PASS_DB=your_mongo_password
   SERVER_DB=your_mongo_cluster_url
   ```

5. Run the server:
   ```bash
   node app.js
   ```

   The server will start running on port 5100.


## API Routes

- **POST `/pets`**: Create a new pet.
  - Body: JSON object with pet details.
  - Response: Created pet object.
  
- **GET `/pets/:id`**: Get details of a single pet by ID.
  - Response: Pet object.

- **GET `/pets`**: Get all pets.
  - Response: Array of pet objects.

- **PUT `/pets/:id`**: Update a pet by ID.
  - Body: JSON object with updated pet details.
  - Response: Updated pet object.

- **DELETE `/pets/:id`**: Delete a pet by ID.
  - Response: Success or failure message.

## Example of API Usage

1. **Create a new pet** (POST /pets):
   ```bash
   curl -X POST -H "Content-Type: application/json" -d '{"name": "Bobby", "type": "dog", "age": 3}' http://localhost:5100/pets
   ```

2. **Get all pets** (GET /pets):
   ```bash
   curl http://localhost:5100/pets
   ```

3. **Get a pet by ID** (GET /pets/:id):
   ```bash
   curl http://localhost:5100/pets/605c72ef1532075b5f6c8762
   ```

4. **Update a pet** (PUT /pets/:id):
   ```bash
   curl -X PUT -H "Content-Type: application/json" -d '{"age": 4}' http://localhost:5100/pets/605c72ef1532075b5f6c8762
   ```

5. **Delete a pet** (DELETE /pets/:id):
   ```bash
   curl -X DELETE http://localhost:5100/pets/605c72ef1532075b5f6c8762
   ```

## Contributing
1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

## License
MIT License - See [LICENSE](LICENSE) for more details.
```

