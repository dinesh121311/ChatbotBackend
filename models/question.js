const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  response: { type: String, required: true },
  tags: [String],
});

const Question = mongoose.model('Question', questionSchema,'questions');

module.exports = Question;
