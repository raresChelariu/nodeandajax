const http = require("http");
const fs = require("fs");
var server = http.createServer((req, res) => {
  console.log(`URL is: ${req.url}`);
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream(__dirname + "\\index.html").pipe(res);
      break;
    case "/postRequest.js":
      res.writeHead(200, { "Content-Type": "text/javascript" });
      fs.createReadStream(__dirname + "\\postRequest.js").pipe(res);
      break;
    case "/getposts":
      if (req.method === "POST") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("Blabla - message from server");
        res.end();
      }
    default:
      break;
  }
});
server.listen(3000, "127.0.0.1");
