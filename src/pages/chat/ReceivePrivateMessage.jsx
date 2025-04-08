import { useEffect, useState } from 'react';

const ReceivePrivateMessage = ({ socket }) => {
    const [messagesRecieved, setMessagesReceived] = useState([]);

    // Runs whenever a socket event is received from the server
    useEffect(() => {
        socket.on('privateMessage', ({ from, msg }) => {
            console.log(`Private message from ${from}: ${msg}`);
        });

        // Remove event listener on component unmount
        return () => socket.off('receive_message');
    }, [socket]);

    // dd/mm/yyyy, hh:mm:ss
    function formatDateFromTimestamp(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleString();
    }

    return (
        <div>
            {messagesRecieved.map((msg, i) => (
                <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>{msg.username}</span>
                        <span>
                            {formatDateFromTimestamp(msg.__createdtime__)}
                        </span>
                    </div>
                    <p>{msg.message}</p>
                    <br />
                </div>
            ))}
        </div>
    );
};

export default ReceivePrivateMessage;