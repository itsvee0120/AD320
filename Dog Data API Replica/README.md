# Dog Facts API

This is a simple API built with Node.js and Express that provides random dog facts. It exposes two routes:

1. **`/`** - Root route that gives a welcome message.
2. **`/facts`** - Returns a list of dog facts. You can specify how many facts to return by using the `number` query parameter.

## Project Structure

- `server.js`: Entry point for the server. It initializes the Express app and sets up the routes.
- `dog_facts-1.js`: Contains an array of dog facts that are returned by the API.
- `app.js`: Sets up the routes and handles the logic for returning dog facts based on the query parameter.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/itsvee0120/AD320.git
   cd "Dog Data API Replica"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   node server.js
   ```

2. The server will start and be available at `http://localhost:3000`.

3. Use the API:
   - **GET `/`**: Returns a welcome message.
   - **GET `/facts`**: Returns an array of dog facts. Optionally, you can use a `number` query parameter to specify how many facts to return.
     - Example: `http://localhost:3000/facts?number=5` will return 5 dog facts.
     - Example (without query): `http://localhost:3000/facts` will return all dog facts.

## Example Responses

- **GET `/facts` (without query)**:

  ```json
  {
    "facts": [
      "Dogs have three eyelids.",
      "Dogs' sense of smell is 40 times better than humans'.",
      "A Greyhound can run up to 45 miles per hour."
    ],
    "success": true
  }
  ```

- **GET `/facts?number=2`**:
  ```json
  {
    "facts": [
      "Dogs' sense of smell is 40 times better than humans'.",
      "A Greyhound can run up to 45 miles per hour."
    ],
    "success": true
  }
  ```

## Error Handling

- If the `number` query parameter is invalid (e.g., not a positive integer), the API will return a `400` error with the following message:
  ```json
  {
    "success": false,
    "message": "Invalid number parameter. It must be a positive integer."
  }
  ```

## Dependencies

- `express`: Web framework for Node.js.

## License

This project is licensed under the MIT License.
