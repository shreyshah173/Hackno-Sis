import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Chatbox = ({ userid, index,status }) => {
  const [chats, setChats] = useState([]);
  const [query, setQuery] = useState('');
  const [queries, setQueries] = useState([]);
  const chatHistoryRef = useRef(null);
    console.log(userid,index);
  useEffect(() => {
    fetchChats();
    fetchQueries();
  }, [index]);

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chats]);

  const fetchChats = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/chats');
      const filteredChats = response.data.filter(chat => chat.userid === userid && chat.index === index);
      
      setChats(filteredChats);
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };

  const fetchQueries = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/queries');
      setQueries(response.data);
    } catch (error) {
      console.error('Error fetching queries:', error);
    }
  };

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const newChat = {
        message: query,
        sentbyuser: true,
        created_at: new Date(),
        index: index,
        userid: userid
      };
      await axios.post('http://localhost:5000/api/chats', newChat);
      setChats([...chats, newChat]);

      const newQuery = {
        currQuery: query
      };
      await axios.post('http://localhost:5000/api/queries', newQuery);

      setQuery('');
      await waitForResponse();

      fetchChats();
      setQueries([]);

    } catch (error) {
      console.error('Error submitting query:', error);
    }
  };

  const waitForResponse = async () => {
    while (true) {
      try {
        const response = await axios.get('http://localhost:5000/api/queries');
        const latestQuery = response.data[response.data.length - 1];
        if (latestQuery) {
          const newChat = {
            message: latestQuery.response,
            sentbyuser: false,
            created_at: new Date(),
            index: index,
            userid: userid
          };
          await axios.post('http://localhost:5000/api/chats', newChat);
          setChats(prevChats => [...prevChats, newChat]);
          await axios.delete('http://localhost:5000/api/queries');
          // if the topic with the current index and userid is not there then add a new topic for that 
            const response = await axios.get('http://localhost:5000/api/topics');
            const filteredTopics = response.data
                .filter(topic => topic.userid === userid && topic.index === index);
            if(filteredTopics.length === 0){
                const newTopic = {
                    topicname: `Topic ${index}`,
                    index: index,
                    userid: userid
                };
                await axios.post('http://localhost:5000/api/topics', newTopic);
                // i want to re render the component in the parent component  reload
                // reload the page
                window.location.reload();
            }

          break;
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error('Error waiting for response:', error);
      }
    }
  };

  if (!status) {
    return (
      <div style={styles.container}>
        <div style={styles.messageWrapper}>
          <h2 style={styles.heading}>Please login to chat</h2>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.chatContainer}>
        <div style={styles.chatHistory} ref={chatHistoryRef}>
          {chats.map((chat, index) => (
            <div key={index} style={chat.sentbyuser ? styles.userMessage : styles.aiMessage}>
              <div style={chat.sentbyuser ? styles.userMessageContent : styles.aiMessageContent}>
                <span>{chat.message}</span>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleQuerySubmit} style={styles.form}>
          <input
            style={styles.input}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type your message here..."
            required
          />
          <button style={styles.button} type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#343541',
    fontFamily: 'Arial, sans-serif',
    padding: '100px',
    color: '#ECECF1',
  },
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
    maxWidth: '800px',
  },
  chatHistory: {
    flex: 1,
    overflowY: 'auto',
    padding: '20px',
  },
  userMessage: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '20px',
  },
  aiMessage: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '20px',
  },
  userMessageContent: {
    maxWidth: '70%',
    padding: '10px 15px',
    borderRadius: '15px',
    backgroundColor: '#498ebc',
    color: '#ECECF1',
  },
  aiMessageContent: {
    maxWidth: '70%',
    padding: '10px 15px',
    borderRadius: '15px',
    backgroundColor: '#444654',
    color: '#D1D5DB',
  },
  form: {
    display: 'flex',
    padding: '20px',
    borderTop: '1px solid #5C5C6E',
  },
  input: {
    flex: 1,
    padding: '10px 15px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#40414F',
    color: '#ECECF1',
  },
  button: {
    padding: '10px 20px',
    marginLeft: '10px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#5C5C6E',
    color: '#ECECF1',
    cursor: 'pointer',
  },
};

export default Chatbox;
