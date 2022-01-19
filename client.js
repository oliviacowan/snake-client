const net = require('net');
const host = '165.227.47.243';
const port = '50541';

const connect = function () {
  const conn = net.createConnection({
    host,
    port
  });

  conn.on('data', (data) => {
    console.log(`server says: ${data}`);
  });
  conn.setEncoding('utf8');
  return conn;
};
module.exports = connect;