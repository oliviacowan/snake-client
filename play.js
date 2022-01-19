const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  conn.on('data', (data) => {
    console.log(`server says: ${data.toString()}`);
  })
  conn.setEncoding('utf8');
  return conn;
};

console.log("connecting...");
connect();