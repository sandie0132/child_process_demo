const childProcess = require("child_process");

var process = childProcess.spawn("node", ["child.js"]);

process.stdout.on("data", function (data) {
  console.log("stdout: " + data);
});

process.stderr.on("data", function (data) {
  console.log("stderr: " + data);
});

process.on("close", function (code) {
  console.log("Child process exit with code: " + code);
});

console.log("Child Process");
