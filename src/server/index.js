import express from 'express';
import { Server as SocketServer } from 'socket.io';
import http from 'http';
import React from 'react';
import ReactDOM from 'react-dom/server';
import App from '../client/components/App';
import path from 'path';

const app = express();
const server = http.createServer(app)
const io = new SocketServer(server);

app.use('/static', express.static(path.join(__dirname, '..', '..', 'dist', 'static')))
app.get('/', (req, res) => {
    const root = (
        <html>
            <body>
                <div id='root'><App /></div>
                <script src='/static/bundle.js'></script>
            </body>
        </html>
    );
    let html = ReactDOM.renderToString(root);
    res.send(html);
});

io.on('connection', () => {
    console.log('a user connected');
});

server.listen(3000, () => {
    console.log('server on port 3000')
});