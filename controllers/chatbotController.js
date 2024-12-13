const Question = require('../models/question');


const getResponse = async (message) => {
  const lowercaseMessage = message.toLowerCase();

  try {
    const question = await Question.findOne({ question: new RegExp(lowercaseMessage, 'i') });
    if (question) {
      return question.response;
    } else {
      return "I'm not sure I understand. Could you please be more specific?";
    }
  } catch (err) {
    console.error('Error fetching response:', err);
    return 'Sorry, something went wrong.';
  }
};

module.exports = { getResponse };
