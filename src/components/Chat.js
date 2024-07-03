import React, { useState } from 'react';
import ChatSidebar from './ChatSidebar';
import Chatbox from './Chatbox';

const Chat = ({ user }) => {
  const id = user._id;
  console.log(id);
  const indexMax = 0;
  // Set the initial index to the maximum value
  const [index, setIndex] = useState(indexMax);

  return (
    <div className="chat-container" style={{marginTop:'100px'}}>
    <div style={{border:'5px solid red'}}>
      <ChatSidebar setIndex={setIndex} userid={id} />
    </div>
      <div className="chat-content">
        <Chatbox userid={id} index={index} status={user.loginStatus} />
      </div>
    </div>
  );
};

export default Chat;
