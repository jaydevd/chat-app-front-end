import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import io from 'socket.io-client';
import Home from './pages/Home';
import Chat from './pages/chat';
import PrivateChats from './pages/privateChats';

const socket = io.connect('http://localhost:5000');

function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('Javascript');

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={
              <Home
                username={username}
                setUsername={setUsername}
                room={room}
                setRoom={setRoom}
                socket={socket}
              />
            }
          />
          <Route
            path='/chat'
            element={<Chat username={username} room={room} socket={socket} />}
          />
          <Route
            path='/chats/private'
            element={<PrivateChats socket={socket} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;