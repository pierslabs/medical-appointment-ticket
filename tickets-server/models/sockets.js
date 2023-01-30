const TicketList = require('./TicketList');

class Sockets {
  constructor(io) {
    this.io = io;

    this.ticketList = new TicketList();
    this.socketEvents();
  }

  socketEvents() {
    this.io.on('connection', (socket) => {
      console.log('Connected client');

      socket.on('create-newTicket', (data, callback) => {
        const newTicket = this.ticketList.createTicket();
        callback(newTicket);
      });

      socket.on('next-ticket', (user, callback) => {
        const { agent, desktop } = user;

        const agentAsignTicket = this.ticketList.asignTicket({
          agent,
          desktop,
        });
        callback(agentAsignTicket);

        this.io.emit('ticket-asigned', this.ticketList.last13);
      });
      //
    });
  }
}

module.exports = Sockets;
