const express = require('express');
const server = require('http');
const socketIo = require('socket.io');
const Sockets = require('./sockets');
const cors = require('cors');
require('dotenv').config();

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = server.createServer(this.app);
    this.io = socketIo(this.server, {
      /*conf*/
    });
    //init sockets
    this.sockets = new Sockets(this.io);
  }

  middlewares() {
    this.app.use(cors());
    //http

    this.app.get('/lastTickets', (req, res) => {
      res.json({
        ok: true,
        lastTickets: this.sockets.ticketList.last13,
      });
    });
  }

  // configSockets() {
  //   try {
  //     new Sockets(this.io);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  execute() {
    this.middlewares();

    this.server.listen(this.port, () => {
      console.log(`server run at port: ${this.port}`);
    });
  }
}

module.exports = Server;
