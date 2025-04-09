import React, { useState } from 'react';
const SendPrivateMessage = ({ socket, username, room }) => {
    const [message, setMessage] = useState('');
    const [toUser, setToUser] = useState('');

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

    const onInputChange = (e) => {
        setToUser(e.target.value);
    }

    return (
        <div>
            <input type="text" name="toUser" id="" onChange={onInputChange} placeholder="send to..." className='bg-neutral-200 rounded-md px-4 py-2 m-2' />

            <input
                placeholder='Message...'
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className='bg-neutral-200 rounded-md px-4 py-2 m-2'
            />
            <button className='bg-sky-400 rounded-md px-3 py-2 text-white' onClick={sendMessage}>
                Send Message
            </button>
        </div>
    );
};

export default SendPrivateMessage;