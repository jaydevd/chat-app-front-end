import { useNavigate } from 'react-router-dom';
import MessagesReceive from './MessageReceive';
import SendMessage from './SendMessage';

const Chat = ({ username, room, socket }) => {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <MessagesReceive socket={socket} />
                <SendMessage socket={socket} username={username} room={room} />
            </div>
        </div>
    );
};

export default Chat;