import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chatbox = ({ user }) => {
    const [chats, setChats] = useState([]);
    const [query, setQuery] = useState('');
    const [queries, setQueries] = useState([]);
    
    useEffect(() => {
        fetchChats();
        fetchQueries();
    }, []);

    const fetchChats = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/chats');
            setChats(response.data);
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

    if (!user.loginStatus) {
        return <h2 style={{marginTop:'100px'}}>Please login to chat</h2>;
    }



    const handleQuerySubmit = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        try {
            const newChat = {
                message: query,
                sentByUser: true,
                order: chats.length + 1
            };
            await axios.post('http://localhost:5000/api/chats', newChat);

            const newQuery = {
                currQuery: query
            };
            await axios.post('http://localhost:5000/api/queries', newQuery);

            // Wait until responded is true for the latest query
            await waitForResponse();

            // After response received, update chats and reset queries
            setQuery('');
            fetchChats();
            setQueries([]);

        } catch (error) {
            console.error('Error submitting query:', error);
        }
    };

    const waitForResponse = async () => {
        // Poll for response until `responded` is true
        while (true) {
            try {
                const response = await axios.get('http://localhost:5000/api/queries');
                const latestQuery = response.data[response.data.length - 1];
                // console.log('Latest query:', latestQuery);
                if (latestQuery.responded) {
                    // Once responded is true, exit the loop
                    // save the response to the /api/chats
                    const newChat = {
                        message: latestQuery.response,
                        sentByUser: false,
                        order: chats.length + 1
                    };
                    await axios.post('http://localhost:5000/api/chats', newChat);
                    // i want to delete all the queries here in the backend

                    // delete all queries
                    await axios.delete('http://localhost:5000/api/queries');

                    break;
                }
                // Wait for 1 second before polling again
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (error) {
                console.error('Error waiting for response:', error);
            }
        }
    };

    return (
        <div className="chatbox-container" style={{ marginTop: '100px' }}>
            <div className="chat-history">
                <h2>Chat History</h2>
                <ul>
                    {chats.map((chat) => (
                        <li key={chat._id}>
                            {chat.sentByUser ? (
                                <span>User: {chat.message}</span>
                            ) : (
                                <span>AI: {chat.message}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="chat-input">
                <form onSubmit={handleQuerySubmit}>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Type your query..."
                        required
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Chatbox;
