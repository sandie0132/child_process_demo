var exec = require("child_process").exec;

exec("node -v", function (error, stdout, stderr) {
  if (error) {
    throw error;
  }

  console.log("Stdout output : " + stdout);
});
