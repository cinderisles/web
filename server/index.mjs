import http from "http";

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      buttons: [
        {
          text: "hi",
          state: 0,
        },
        {
          text: "hello",
          state: 1,
        },
      ],
    })
  );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
