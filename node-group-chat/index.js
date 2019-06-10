const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.render("index.ejs");
});

const server = http.listen(3000, function() {
  console.log("listen on *:3000");
});

io.sockets.on("connection", function(socket) {
  socket.on("username", username => {
    socket.username = username;
    io.emit("is_online", "🔵 <i>" + socket.username + " join the chat..</i>");
  });

  socket.on("disconnect", () => {
    io.emit("is_online", "🔴 <i>" + socket.username + " left the chat..</i>");
  });

  socket.on("chat_message", function(message) {
    io.emit(
      "chat_message",
      "<strong>" + socket.username + "</strong>: " + message
    );
  });
});
