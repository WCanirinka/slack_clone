import React from 'react';
import './Message.css';

function Message({ messages, timestamp, user, userImage }) {
  return (
    <div className='message'>
      <img src={userImage} alt='' />
      <div className='message__info'>
        <h4>{user} timestamp... </h4>
        <p>{messages}</p>
      </div>
    </div>
  )
}

export default Message
