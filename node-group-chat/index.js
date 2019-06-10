const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.send("hello, world");
});

const server = http.listen(3000, function() {
  console.log("listen on *:3000");
});
