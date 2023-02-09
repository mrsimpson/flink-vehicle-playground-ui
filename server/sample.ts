import express from 'express';
import cors from 'cors';
import {Server} from 'http';

import {Server as SocketServer} from 'socket.io';
const app = express().use(cors());
const PORT = 4000;

const http = new Server(app);

const io = new SocketServer(http, {
  cors: {
    origin: "*"
  }
});
// const io = new socketIO.Server(http, {
//   cors: {
//       origin: "*"
//   }
// });

io.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });
});

app.get("/", (req, res) => {
  res.send({hello: "world"})
})

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});