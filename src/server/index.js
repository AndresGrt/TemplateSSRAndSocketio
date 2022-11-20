import express from 'express';
import { Server as SocketServer } from 'socket.io';
import sockets from './config/sockets';
import http from 'http';
import path from 'path';
import routes from './routes/routes';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Error404 from './views/404';

const app = express();
const server = http.createServer(app)
const io = new SocketServer(server);

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', routes)
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use('/static', express.static(path.join(__dirname, '..', '..', 'dist', 'static')))
app.get('*', (req, res) => res.status(404).send(ReactDOM.renderToString(<Error404 />)));

server.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
    sockets(io);
});