process.on("message", (msg) => {
  console.log("Message from the parent process :", msg);
});

let counter = 0;

for (var i = 0; i < 4; i++) {
  process.send({ counter: counter++ });
}
