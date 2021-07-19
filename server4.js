const http = require("http");
const fs = require("fs");
const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;
const DIRNAME = __dirname
const FILENAME = __filename

fs.readFile("test.txt", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data.toString());
});

// const server = http.createServer((request, response) => {
//     response.statusCode = 200;
//     response.setHeader("Content-Type", "text/plain");
//     response.write(`hello world!!!!`);
//     response.write(`\nDirectory: ${DIRNAME}\nFilename: ${FILENAME}`);
//     response.end("\nThe end");
// })

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.end("<h1>Hello world</h1>");
})

server.listen(PORT, HOSTNAME, () => console.log(`Server is running at http://${HOSTNAME}:${PORT}`));


// -15:15 in video