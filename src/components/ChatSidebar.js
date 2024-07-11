import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatSidebar = ({ setIndex, userid }) => {
  const [topics, setTopics] = useState([]);
  const [newTopicName, setNewTopicName] = useState('New Chat');
  const [editTopicId, setEditTopicId] = useState(null);
  const [editTopicName, setEditTopicName] = useState('');

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/topics');
        const filteredTopics = response.data
          .filter(topic => topic.userid === userid)
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setTopics(filteredTopics);
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    };

    fetchTopics();
  }, [userid]);

  const handleDelete = async (id, index) => {
    try {
      await axios.delete(`http://localhost:5000/api/topics/${id}`);
      await axios.delete(`http://localhost:5000/api/chats/user/${userid}/index/${index}`);
      setTopics(topics.filter(topic => topic._id !== id));
    } catch (error) {
      console.error('Error deleting topic:', error);
    }
  };

  const handleNewTopic = async () => {
    if (!newTopicName.trim()) return;

    try {
      const newIndex = topics.length ? Math.max(...topics.map(topic => topic.index)) + 1 : 1;
      const newTopic = {
        topicname: newTopicName,
        userid: userid,
        created_at: new Date().toISOString(),
        index: newIndex
      };

      const response = await axios.post('http://localhost:5000/api/topics', newTopic);
      setTopics([...topics, response.data].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)));
      setNewTopicName('New Chat');
      setIndex(newIndex);
    } catch (error) {
      console.error('Error creating new topic:', error.response || error);
    }
  };

  const handleUpdate = async () => {
    if (!editTopicName.trim()) return;

    try {
      const updatedTopic = {
        topicname: editTopicName
      };

      const response = await axios.put(`http://localhost:5000/api/topics/${editTopicId}`, updatedTopic);
      setTopics(topics.map(topic => topic._id === editTopicId ? response.data : topic));
      setEditTopicId(null);
      setEditTopicName('');
    } catch (error) {
      console.error('Error updating topic:', error.response || error);
    }
  };

  return (
    <div className="chat-sidebar">
      <div>
        <div className='new-chat' onClick={handleNewTopic}><i className="fa fa-plus" aria-hidden="true"></i> New Chat</div>
      </div>
      <ul>
        {topics.map(topic => (
          <li key={topic._id} onClick={() => setIndex(topic.index)}>
            <div className='chat-side'>
              {editTopicId === topic._id ? (
                <>
                  <input
                    type='text'
                    value={editTopicName}
                    onChange={(e) => setEditTopicName(e.target.value)}
                  />
                  <i onClick={handleUpdate} class="fa fa-floppy-o" aria-hidden="true"></i>
                  <i onClick={() => setEditTopicId(null)} class="fa fa-ban" aria-hidden="true"></i>
                </>
              ) : (
                <>
                  <span>{topic.topicname}</span>
                  <i onClick={(e) => { e.stopPropagation(); handleDelete(topic._id, topic.index); }} className="fa fa-trash" aria-hidden="true"></i>
                  <i onClick={(e) => { e.stopPropagation(); setEditTopicId(topic._id); setEditTopicName(topic.topicname); }} className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatSidebar;
