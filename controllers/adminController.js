const Question = require('../models/question');


const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching questions' });
  }
};

const addQuestion = async (req, res) => {
  const { question, response, tags } = req.body;
  try {
    const newQuestion = new Question({ question, response, tags });
    await newQuestion.save();
    res.json({ message: 'Question added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error adding question' });
  }
};

const updateQuestion = async (req, res) => {
  const { id } = req.params;
  const { question, response, tags } = req.body;
  try {
    await Question.findByIdAndUpdate(id, { question, response, tags });
    res.json({ message: 'Question updated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error updating question' });
  }
};

const deleteQuestion = async (req, res) => {
  const { id } = req.params;
  try {
    await Question.findByIdAndDelete(id);
    res.json({ message: 'Question deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting question' });
  }
};

module.exports = { getAllQuestions, addQuestion, updateQuestion, deleteQuestion };
