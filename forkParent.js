const { fork } = require("child_process");

const forkedFile = fork("forkChild.js");

forkedFile.on("message", (msg) => {
  console.log("Message from the child process :", msg);
});

forkedFile.send({ From: "Parent Process" });
