function route(pathname, handler) {
  console.log("about to route a request for " + pathname);
  if (typeof handler[pathname] === "function") {
    handler[pathname]();
  } else {
    console.log("no request handler found for " + pathname);
  }
}

exports.route = route;
