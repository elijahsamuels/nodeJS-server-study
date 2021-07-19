const http = require("http");
const fs = require("fs");
const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    fs.readFile("./index.html", (err, data) => {
        if (err) {
            console.error(err);
            response.end();
        } else {
            response.end(data);
        }
    })
})

server.listen(PORT, HOSTNAME, () => console.log(`Server is running at http://${HOSTNAME}:${PORT}`));
