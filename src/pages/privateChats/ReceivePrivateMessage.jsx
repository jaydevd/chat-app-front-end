import { useEffect, useState } from 'react';

const ReceivePrivateMessage = ({ socket }) => {
    const [messagesReceived, setMessagesReceived] = useState([]);
    const [fromUser, setFromUser] = useState('');
    // Runs whenever a socket event is received from the server
    useEffect(() => {
        socket.on('privateMessage', ({ from, msg }) => {
            console.log(msg);
            setFromUser(from);
            setMessagesReceived([...messagesReceived, msg])
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
            <p>received msgs</p>
            {messagesReceived.map((msg, i) => (
                <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>{fromUser}</span>
                        {/* <span>
                            {formatDateFromTimestamp(msg.__createdtime__)}
                        </span> */}
                    </div>
                    <p>hello {msg}</p>
                    <br />
                </div>
            ))}
        </div>
    );
};

export default ReceivePrivateMessage;