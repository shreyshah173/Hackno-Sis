const Topic = require('../models/topicModel');

// Create a new topic
exports.createTopic = async (req, res) => {
  const { index, created_at, topicname, userid } = req.body;
  if (!index || !created_at || !topicname || !userid) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const newTopic = new Topic({ index, created_at, topicname, userid });
    const savedTopic = await newTopic.save();
    res.status(201).json(savedTopic);
  } catch (error) {
    res.status(500).json({ error: 'Error creating new topic' });
  }
};

// Get all topics
exports.getAllTopics = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.status(200).json(topics);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single topic by ID
exports.getTopicById = async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id);
    if (!topic) return res.status(404).json({ message: 'Topic not found' });
    res.status(200).json(topic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a topic
exports.deleteTopic = async (req, res) => {
  try {
    const deletedTopic = await Topic.findByIdAndDelete(req.params.id);
    if (!deletedTopic) return res.status(404).json({ message: 'Topic not found' });
    res.status(200).json({ message: 'Topic deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateTopic = async (req, res) => {
  try {
    const updatedTopic = await Topic.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedTopic) return res.status(404).json({ message: 'Topic not found' });
    res.status(200).json(updatedTopic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};