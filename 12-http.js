const http = require("http"); //calling http module

//req (what the client wants)
//res (the resolution we gave)

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you were looking</p>
  <a href="/">Back home</a>`);
});

server.listen(5000); //arbitrary¿ makes the IP of localhost
