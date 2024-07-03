const Chat = require('../models/chatModel');

// Create a new chat message
exports.createChat = async (req, res) => {
  try {
    const newChat = new Chat(req.body);
    const savedChat = await newChat.save();
    res.status(201).json(savedChat);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all chat messages
exports.getAllChats = async (req, res) => {
  try {
    const chats = await Chat.find();
    res.status(200).json(chats);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get chat messages by user ID
exports.getChatsByUserId = async (req, res) => {
  try {
    const chats = await Chat.find({ userid: req.params.userid });
    res.status(200).json(chats);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get chat messages by index
exports.getChatsByIndex = async (req, res) => {
  try {
    const chats = await Chat.find({ index: req.params.index });
    res.status(200).json(chats);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a chat message
exports.deleteChat = async (req, res) => {
  try {
    const deletedChat = await Chat.findByIdAndDelete(req.params.id);
    if (!deletedChat) return res.status(404).json({ message: 'Chat not found' });
    res.status(200).json({ message: 'Chat deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.deleteChatsByUserIdAndIndex = async (req, res) => {
  const { userid, index } = req.params;
  try {
    await Chat.deleteMany({ userid, index });
    res.status(200).json({ message: 'Chats deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting chats', error });
  }
};