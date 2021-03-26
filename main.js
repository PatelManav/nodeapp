const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
    res.writeHead(statusCode, { "Content-Type": "text/plain" });
    req.on("data", (data) => {
        input = data.toString();
        if (input === "hello") {
            res.end("world");
        } else {
            res.end("Input hello for world");
        }
    });
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
