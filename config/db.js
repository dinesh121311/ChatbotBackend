const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Updated connection string for local MongoDB
    const mongoURI = 'mongodb://localhost:27017/chatbot'; // Using localhost instead of Docker's 'mongodb'
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit on failure
  }
};

module.exports = connectDB;
