const express = require('express');
const router = express.Router();
const { getResponse } = require('../controllers/chatbotController');


router.post('/chat', async (req, res) => {
  const { message } = req.body;
  const response = await getResponse(message);
  res.json({ reply: response });
});

module.exports = router;
