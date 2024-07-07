import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Chatbox = ({ userid, index, status }) => {
  const [chats, setChats] = useState([]);
  const [query, setQuery] = useState('');
  const [queries, setQueries] = useState([]);
  const chatHistoryRef = useRef(null);
  // console.log(userid, index);

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
          // Check if the topic with the current index and userid exists
          const response = await axios.get('http://localhost:5000/api/topics');
          const filteredTopics = response.data.filter(topic => topic.userid === userid && topic.index === index);
          if (filteredTopics.length === 0) {
            const newTopic = {
              topicname: `Topic ${index}`,
              index: index,
              userid: userid
            };
            await axios.post('http://localhost:5000/api/topics', newTopic);
            // Reload the component without a full page reload
            fetchChats();
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
        {chats.length === 0 ? (
          <div style={styles.emptyStateContainer}>
            <h2>Chat with our AI agent</h2>
            <div style={styles.cardsContainer}>
              <div style={styles.card}>Card 1</div>
              <div style={styles.card}>Card 2</div>
              <div style={styles.card}>Card 3</div>
              <div style={styles.card}>Card 4</div>
            </div>
          </div>
        ) : (
          <div style={styles.chatHistory} ref={chatHistoryRef}>
            {chats.map((chat, index) => (
              <div key={index} style={chat.sentbyuser ? styles.userMessage : styles.aiMessage}>
                <div style={chat.sentbyuser ? styles.userMessageContent : styles.aiMessageContent}>
                  <span>{chat.message}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        <form onSubmit={handleQuerySubmit} style={styles.form}>
          <input
            style={styles.input}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type your message here..."
            required
          />
          <button style={styles.button} type="submit"><i className="fa fa-arrow-circle-up" aria-hidden="true"></i></button>
        </form>
      </div>
    </div>
  );
};



const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: 'white',
    padding: '110px 0px 30px 50px',
    color: '#ECECF1',
    fontFamily: 'sans-serif',
  },
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    maxWidth: '1200px',
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    
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
    boxShadow: '0 4px 8px rgba(180, 180, 180, 0.5)',
    backgroundColor: 'white',
    color: 'black',
    fontWeight: '100',
    fontSize: '20px',
    wordBreak: 'break-word',
  },
  aiMessageContent: {
    maxWidth: '70%',
    padding: '10px 15px',
    borderRadius: '15px',
    boxShadow: '0 2px 4px rgba(2, 151, 255, 0.5)',
    backgroundColor: 'white',
    color: 'black',
    fontSize: '20px',
    fontWeight: '100',
    wordBreak: 'break-word',
  },
  form: {
    display: 'flex',
    maxWidth: '70%',
    padding: '20px',
    borderRadius: '15px',
    marginLeft: '170px',
    borderTop: '1px solid',
    backgroundColor: 'rgb(249, 249, 249)', // Footer background color
  },
  input: {
    flex: 1,
    padding: '10px 15px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: 'rgb(235, 235, 235)',
    color: 'rgb(30, 30, 30)',
    outline: 'none',
  },
  button: {
    padding: '5px 15px',
    marginLeft: '10px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: 'rgb(225, 225, 225)',
    color: 'white',
    fontSize: '20px',
    cursor: 'pointer',
    outline: 'none',
  },
  emptyStateContainer: {
    textAlign: 'center',
    padding: '75px',
    color: 'rgb(30, 30, 30)'
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '80px',
    marginBottom: '80px',
  },
  card: {
    width: '200px',
    height: '150px',
    backgroundColor: 'white',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(2, 151, 255, 0.5)', // #0297FF box shadow
  },
};

export default Chatbox;

