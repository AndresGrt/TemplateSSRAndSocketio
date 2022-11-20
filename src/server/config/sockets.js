const ROOMS = {};
let users = [];

function sockets(io) {
    console.log('websocket is connected');
    io.on('connection', (socket) => {
        socket.on('contador', () => {
            if(!users.includes(socket.id)){
                users.push(socket.id)
            }
            io.sockets.emit('contador', users.length);
        });

        socket.on('disconnect', ()=>{
            users = users.filter(user => user != socket.id);
            io.sockets.emit('contador', users.length);
        });
    });
}

export default sockets;