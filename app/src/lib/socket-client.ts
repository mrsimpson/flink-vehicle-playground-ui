import type { Socket } from "socket.io-client";
import { io } from "socket.io-client";
// import type { ClientToServerEvents, ServerToClientEvents } from "../communication";

class SocketIOService {
  socket: Socket;
  constructor() {
    this.socket = io("http://localhost:4000");
  }
}

// create an instance/connection here
export const socket = new SocketIOService().socket;