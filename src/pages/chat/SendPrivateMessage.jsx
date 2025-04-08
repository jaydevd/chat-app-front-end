import React, { useState } from 'react';

const SendPrivateMessage = ({ socket, username, room }) => {
    const [message, setMessage] = useState('');

    socket.on('privateMessage', ({ from, msg }) => {
        console.log(`Private message from ${from}: ${msg}`);
    });

    const sendMessage = () => {
        if (message !== '') {
            const __createdtime__ = Date.now();
            // Send message to server. We can't specify who we send the message to from the frontend. We can only send to server. Server can then send message to rest of users in room
            socket.emit('privateMessage', { to: toUser, msg: message });
            setMessage('');
        }
    };

    return (
        <div>
            <input
                placeholder='Message...'
                onChange={(e) => setMessage(e.target.value)}
                value={message}
            />
            <button className='btn btn-primary' onClick={sendMessage}>
                Send Message
            </button>
        </div>
    );
};

export default SendPrivateMessage;