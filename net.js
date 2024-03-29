const net = require("net");

const server = net
  .createServer((socket) => {
    socket.end("goodbye\n");
  })
  .on("error", (err) => {
    throw err;
  });

server.listen(() => {
  address = server.address;
  console.log("opened server on %j", address);
});

module.exports = {
  server,
};
