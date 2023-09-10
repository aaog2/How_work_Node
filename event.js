const eventEmitter = require("events");
let http = require("http");

let myEmitter = new eventEmitter();

myEmitter.on("newSale", () => {
  console.log("new sale open");
});

myEmitter.on("newSale", () => {
  console.log("custamer is Jone");
});

myEmitter.on("newSale", (stock) => {
  console.log(`sale open and stock left ${stock}`);
});

myEmitter.emit("newSale", 9);

// --------------------------------

let server = http.createServer();

server.on("request", (req, res) => {
  console.log("request Recieved");
  res.end("request Recieved");
});

server.on("request", (req, res) => {
  console.log("New request Recieved");
  //   res.end("Another request Recieved");
});

server.on("close", () => {
  console.log("Sever closed");
});

server.listen(3000);
