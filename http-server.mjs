import http from "http";

const server = http.createServer((req, res) => {
  console.info(req.method);
  console.info(req.url);
  console.table(req.headers);

  res.write("Hello Alfin");
  res.end();
});

server.listen(3000, () => {
  console.log("Server is runing");
});
