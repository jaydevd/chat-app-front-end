import { useNavigate } from 'react-router-dom';

const Home = ({ username, setUsername, room, setRoom, socket }) => {
    const navigate = useNavigate();
    const joinRoom = () => {
        if (room !== '' && username !== '') {
            setTimeout(() => {

                socket.emit('join_room', { username, room });
            }, 100); // wait for Chat to mount
            navigate('/chat', { replace: true });
        } else {
            console.log("no data found");
        }
    };

    return (
        <div className="h-screen w-10/12 mx-auto flex-col gap-3 flex justify-center items-center">
            <div className="flex flex-col gap-3 bg-blue-500/30 px-5 py-10 rounded-lg">
                <input
                    className="bg-neutral-100 rounded-md px-4 py-2"
                    placeholder='Username...'
                    onChange={(e) => setUsername(e.target.value)}
                />

                <select
                    className="bg-neutral-100 rounded-md px-4 py-2"
                    onChange={(e) => setRoom(e.target.value)}
                >
                    <option value="Javascript">Javascript</option>
                    <option value="Node">Node</option>
                </select>

                <button
                    className='rounded-md px-3 py-1 bg-sky-500 text-white'
                    style={{ width: '100%' }}
                    onClick={joinRoom}
                >
                    Join Room
                </button>
                <button className='px-3 py-1 bg-green-800 rounded-md text-white text-sm cursor-pointer' onClick={() => navigate('/chats/private', { replace: true })}>Direct Messages</button>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Home;