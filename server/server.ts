import { KafkaClient, Consumer } from 'kafka-node';

import express from 'express';
import cors from 'cors';
import { Server } from 'http';

import { Server as SocketServer } from 'socket.io';
// Kafka-connection
const kafkaClient = new KafkaClient({ kafkaHost: process.env.KAFKA || 'localhost:9092' });

// a consumer represent a PubSub to a topic
const consumer = new Consumer(kafkaClient, [
  // { topic: 'event' }, 
  { topic: 'rentals' },
  { topic: 'returns' },
  { topic: 'trips' },
], 
{ autoCommit: false }
);


const app = express().use(cors());
const PORT = 4000;

const http = new Server(app);

const io = new SocketServer(http, {
  cors: {
    origin: "*"
  }
});

io.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });

  consumer.on('message', (message) => {
    // console.log(`⏭️ ${message.value}`);
    socket.emit(message.topic, JSON.parse(message.value.toString()));
  });
});

app.get("/", (req, res) => {
  res.send("Express up and running")
})

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});