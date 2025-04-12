# E-commerce Web Application

This is a full-stack e-commerce web application built with Node.js and React. The application consists of a backend server that handles API requests and a frontend client that provides a user interface for browsing and purchasing products.

## Project Structure

The project is organized into two main directories: `backend` and `frontend`.

### Backend

The backend is built using Express and MongoDB. It includes the following components:

- **src/app.js**: Entry point of the backend application. Initializes the Express app and sets up middleware.
- **src/controllers/productController.js**: Contains the `ProductController` class with methods for handling product-related requests.
- **src/models/productModel.js**: Defines the Mongoose model for product documents in the database.
- **src/routes/productRoutes.js**: Sets up the routes for product-related operations.
- **src/utils/db.js**: Establishes a connection to the MongoDB database.
- **package.json**: Lists dependencies and scripts for starting the server.
- **README.md**: Documentation for the backend part of the application.

### Frontend

The frontend is built using React. It includes the following components:

- **public/index.html**: Main HTML file for the React application.
- **src/App.js**: Main component that sets up routing and renders different pages.
- **src/components/ProductCard.js**: Displays individual product details.
- **src/pages/HomePage.js**: Displays a list of products using the `ProductCard` component.
- **src/styles/App.css**: CSS styles for the React application.
- **src/index.js**: Entry point for the React application.
- **package.json**: Lists dependencies and scripts for building and starting the application.
- **README.md**: Documentation for the frontend part of the application.

## Getting Started

To get started with the application, follow these steps:

1. Clone the repository.
2. Navigate to the `backend` directory and install dependencies:
   ```
   cd backend
   npm install
   ```
3. Set up your MongoDB database and update the connection string in `src/utils/db.js`.
4. Start the backend server:
   ```
   npm start
   ```
5. In a new terminal, navigate to the `frontend` directory and install dependencies:
   ```
   cd frontend
   npm install
   ```
6. Start the frontend application:
   ```
   npm start
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.

## License

This project is licensed under the MIT License.