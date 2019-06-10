const server = require("./server.js");
const router = require("./router.js");
const requestHandler = require("./requrestHandler");

const handler = {};
handler["/"] = requestHandler.start;
handler["/start"] = requestHandler.start;
handler["/upload"] = requestHandler.upload;

server.start(router.route, handler);
