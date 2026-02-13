const express = require('express');
const connectDB = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

app.use(express.static('public'));

app.use('/api/tipos-usuario', require('./routes/tiposUsuario'));
app.use('/api/usuarios', require('./routes/usuarios'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});