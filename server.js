const http = require("http");
const url = require("url");

exports.start = function(route, handler) {
  let server = http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;

    route(pathname, handler);

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("hello, world");
    res.end();
  });
  server.listen(3000);

  console.log("server start at localhost:" + 3000);
};
