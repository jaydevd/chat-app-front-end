import ReceivePrivateMessage from './ReceivePrivateMessage';
import SendPrivateMessage from './SendPrivateMessage';


const PrivateChats = ({ username, room, socket }) => {

    // const [username, setUsername] = useState('');

    socket.emit('register', username);

    return (
        <div>
            <div>
                <ReceivePrivateMessage socket={socket} />
                <SendPrivateMessage socket={socket} username={username} room={room} />
            </div>
        </div>
    );
};

export default PrivateChats;