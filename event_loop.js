let fs = require("fs");
let crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 5;

setTimeout(() => {
  console.log("Timer 1 finish");
}, 0);
setImmediate(() => {
  console.log("Immediate 1 finish");
});

fs.readFile("text.txt", () => {
  console.log("I/O finish");
  console.log("___________________");

  setTimeout(() => {
    console.log("Timer 2 finish");
  }, 0);
  setTimeout(() => {
    console.log("Timer 3 finish");
  }, 5000);
  setImmediate(() => {
    console.log("Immediate 2 finish");
  });
  process.nextTick(() => {
    console.log("Process.nextTrick");
  });

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "password encrypted");
});

console.log("Hello from the Top-Level code");
console.log(process.env.UV_THREADPOOL_SIZE); // -> undefined
