import {KafkaClient, Consumer} from 'kafka-node';
import {Server} from 'socket.io';

const kafkaClient = new KafkaClient({ kafkaHost: process.env.KAFKA || 'localhost:9092' });
const consumer = new Consumer(kafkaClient, [{ topic: 'my-topic' }], {});

const io = new Server();

io.on('connection', (socket) => {
  console.log('Client connected');

  consumer.on('message', (message) => {
    console.log(`Received message: ${message.value}`);
    socket.emit('message', message.value);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

io.listen(parseInt(process.env.PORT|| '7070'))

consumer.on('error', (err) => {
  console.error(err);
});
