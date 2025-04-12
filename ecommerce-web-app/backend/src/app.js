const express = require('express');
const mongoose = require('mongoose');
const { connectDB } = require('./utils/db');
const { setProductRoutes } = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to the database
connectDB();

// Set up routes
setProductRoutes(app);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});