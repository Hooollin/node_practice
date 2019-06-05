function route(pathname, handler, res, postData) {
  console.log("about to route a request for " + pathname);
  if (typeof handler[pathname] === "function") {
    handler[pathname](res, postData);
  } else {
    console.log("no request handler found for " + pathname);
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 Not found");
    res.end();
  }
}

exports.route = route;
