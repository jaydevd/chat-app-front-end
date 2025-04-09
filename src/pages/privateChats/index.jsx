import { useState } from 'react';
import ReceivePrivateMessage from './ReceivePrivateMessage';
import SendPrivateMessage from './SendPrivateMessage';

const PrivateChats = ({ socket }) => {

    const [username, setUsername] = useState(null);
    const onSubmit = (e) => {
        if (username) {

            e.preventDefault();
            socket.emit('register', username);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder='username...' className="px-4 py-2 rounded-s-md bg-neutral-200 text-sm m-2 mr-0" onChange={(e) => setUsername(e.target.value)} />
                <button type="submit" className="bg-green-800 text-white text-sm px-3 py-2 rounded-e-md m-2 ml-0">Register yourself</button>
            </form>
            <ReceivePrivateMessage socket={socket} />
            <SendPrivateMessage socket={socket} username={username} />
        </div>
    );
};

export default PrivateChats;