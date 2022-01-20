const net = require('net');
const { host, port } = require('./constants');
const connect = function () {
  const conn = net.createConnection({
    host,
    port,
  });
  conn.on('connect', () => {
    console.log('Connection established');
  });
  conn.on('connect', () => {
    conn.write("Name: OC");
    //   setInterval(() => {
    //   conn.write('Move: up');
    // }, 1000) 
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