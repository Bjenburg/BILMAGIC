# E-commerce Web Application Backend

This is the backend part of the E-commerce web application built with Node.js and Express. The backend is responsible for handling API requests, managing the database, and serving data to the frontend.

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **app.js**: Entry point of the application. Initializes the Express app and sets up middleware.
  - **controllers/**: Contains the logic for handling requests.
    - **productController.js**: Manages product-related operations.
  - **models/**: Defines the data structure for the application.
    - **productModel.js**: Mongoose model for products.
  - **routes/**: Defines the API routes.
    - **productRoutes.js**: Sets up routes for product operations.
  - **utils/**: Contains utility functions.
    - **db.js**: Handles database connection.

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd ecommerce-web-app/backend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Set up the database**:
   Ensure you have MongoDB installed and running. Update the database connection string in `utils/db.js` if necessary.

4. **Run the application**:
   ```
   npm start
   ```

## API Endpoints

- `GET /api/products`: Retrieve all products.
- `GET /api/products/:id`: Retrieve a product by ID.
- `POST /api/products`: Create a new product.
- `PUT /api/products/:id`: Update a product by ID.
- `DELETE /api/products/:id`: Delete a product by ID.

## License

This project is licensed under the MIT License. See the LICENSE file for details.