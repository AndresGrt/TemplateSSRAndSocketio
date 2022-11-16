import React from 'react';
import io from 'socket.io-client';

const socket = io();

function App() {
    return (
        <div className='App'>
            <h1>Hola mundo con React jsx</h1>
        </div>
    );
}

export default App;