import React from 'react';
import CounterUsers from './CounterUsers';
import SocketContext from '../context/SocketContext';
import io from 'socket.io-client';

const socket = io();
function App() {
    return (
        <SocketContext.Provider value={socket}>
            <div className='app'>
                <img src="/assets/Andres.svg" alt="Andres" width={256} />
                <h1>Hola mundo con React jsx</h1>
                <CounterUsers />
            </div>
        </SocketContext.Provider>
    );
}

export default App;