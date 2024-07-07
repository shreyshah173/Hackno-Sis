import React, { useState } from 'react';
import ChatSidebar from './ChatSidebar';
import Chatbox from './Chatbox';

const Chat = ({ user }) => {
  const id = user._id;
  const indexMax = 0;
  const [index, setIndex] = useState(indexMax);

  return (
    <div style={styles.chatContainer}>
      <div style={styles.sidebarContainer}>
        <ChatSidebar setIndex={setIndex} userid={id} />
      </div>
      <div style={styles.chatContentContainer}>
        <Chatbox userid={id} index={index} status={user.loginStatus} />
      </div>
    </div>
  );
};

const styles = {
  chatContainer: {
    display: 'flex',
    height: '100vh',
    backgroundColor: 'rgb(250, 250, 250)', // Light background color
    overflow: 'hidden',
  },
  sidebarContainer: {
    width: '180px',
    position: 'fixed',
    top: '110px',
    left: '20px',
    bottom: 0,
    overflowY: 'auto', // Allow sidebar to scroll independently
  },
  chatContentContainer: {
    flex: 1,
    marginLeft: '250px', // Match sidebar width
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflowY: 'auto', // Allow chat content to scroll independently
  },
};

export default Chat;