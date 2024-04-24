const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/users', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
