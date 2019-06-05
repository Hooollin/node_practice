const http = require("http");
const url = require("url");

exports.start = function(route, handler) {
  let server = http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    let postData = "";
    req.setEncoding("utf8");
    req.on("data", function(chunk) {
      postData += chunk;
    });
    req.on("end", () => {
      route(pathname, handler, res, postData);
    });
  });
  server.listen(3000);

  console.log("server start at localhost:" + 3000);
};
