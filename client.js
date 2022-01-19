const net = require('net');
const host = '165.227.47.243';
const port = '50541';

const connect = function () {
  const conn = net.createConnection({
    host,
    port
  });
  conn.on('connect', () => {
    console.log('Connection established');
  });
  conn.on('connect', () => {
    conn.write("Name: OC");
    // setInterval(() => {
    //   conn.write("Move: up");

    // }, 50);
    let moves = ["Move: up", "Move: left", "Move: down", "Move: down", "Move: right"];
    let delay = 1000;
    for (const move of moves) {
    setTimeout(() => {
      conn.write(move);
    }, delay) 
    delay += 50;
  }
    // conn.write("Move: up");
    // conn.write("Move: down");
    // conn.write("Move: left");
    // conn.write("Move: right");
  });


  
  conn.on('data', (data) => {
    console.log(`server says: ${data}`);
  });
  conn.setEncoding('utf8');
  return conn;
};
module.exports = connect;