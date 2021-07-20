const http = require("http");
const fs = require("fs");
const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/html");

    let path = "./";
    switch (request.url) {
        case "/":
            path += "index.html";
            response.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            response.statusCode = 200;
            break;
        default:
            response.setHeader("location", "/");
            response.statusCode = 301;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.error(err);
            response.end();
        } else {
            response.end(data);
        }
    });
});

server.listen(PORT, HOSTNAME, () =>
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`)
);
