import React, { useState, useContext } from 'react';
import SocketContext from '../context/SocketContext';
import { ImEye } from 'react-icons/im';

function CounterUsers() {
    const socket = useContext(SocketContext);
    const [users, setUsers] = useState(0);

    socket.on('connect', () => socket.emit('contador'));
    socket.on('contador', (data) => setUsers(data));

    return (<span><ImEye /> {users}</span>);
}

export default CounterUsers;