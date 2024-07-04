const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/', chatController.createChat);
router.get('/', chatController.getAllChats);
router.get('/user/:userid', chatController.getChatsByUserId);
router.get('/index/:index', chatController.getChatsByIndex);
router.delete('/:id', chatController.deleteChat);
router.delete('/user/:userid/index/:index', chatController.deleteChatsByUserIdAndIndex); // New route


module.exports = router;
