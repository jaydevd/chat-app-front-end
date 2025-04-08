import MessagesReceive from './MessageReceive';
import SendMessage from './SendMessage';

const Chat = ({ username, room, socket }) => {
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