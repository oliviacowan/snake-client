const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });
  conn.on('connect', () => {
    console.log('Connection established');
  });
  conn.on('connect', () => {
    conn.write("Name: OC");
      setInterval(() => {
      conn.write('Move: up');
    }, 1000) 
  });
  
  conn.on('data', (data) => {
    console.log(`server says: ${data}`);
  });
  conn.setEncoding('utf8');
  return conn;
};
module.exports = {
  connect,
};