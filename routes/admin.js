const express = require('express');
const router = express.Router();
const {
  getAllQuestions,
  addQuestion,
  updateQuestion,
  deleteQuestion,
} = require('../controllers/adminController');

router.get('/questions', getAllQuestions);
router.post('/questions', addQuestion);
router.put('/questions/:id', updateQuestion);
router.delete('/questions/:id', deleteQuestion);

module.exports = router;
