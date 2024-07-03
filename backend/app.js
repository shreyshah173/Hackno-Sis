const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const queryRoutes = require('./routes/queryRoutes');
const topicRoutes = require('./routes/topicRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// MongoDB connection setup
const mongoURI = 'mongodb+srv://jainshrey1110:ntc1I0fDnar09r7S@cluster0.cs2cl1z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Routes
app.use('/api/users', userRoutes); // User routes
app.use('/api/chats', chatRoutes); // Chat history routes
app.use('/api/queries', queryRoutes); // Query management routes
app.use('/api/topics', topicRoutes); // Topic routes

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
