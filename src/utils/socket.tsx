import socketIO from 'socket.io-client';

const socket = socketIO('http://192.168.1.100:5001');

export default socket;
