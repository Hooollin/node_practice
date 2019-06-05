function start(res, postData) {
  console.log("Request handler 'start' was called");
  var body =
    "<html>" +
    "<head>" +
    '<meta http-equiv="Content-Type" content="text/html; ' +
    'charset=UTF-8" />' +
    "</head>" +
    "<body>" +
    '<form action="/upload" method="post">' +
    '<textarea name="text" rows="20" cols="60"></textarea>' +
    '<input type="submit" value="Submit text" />' +
    "</form>" +
    "</body>" +
    "</html>";
  res.writeHeader(200, { "content-type": "text/html" });
  res.write(body);
  res.end();
}

function upload(res, postData) {
  console.log("Request handler 'upload' was called");
  res.writeHeader(200, { "content-type": "text/plain" });
  res.write("you've sent " + postData);
  res.end();
}

exports.start = start;
exports.upload = upload;
