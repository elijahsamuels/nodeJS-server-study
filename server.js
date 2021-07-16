const http = require("http");
const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

const DIRNAME = __dirname
const FILENAME = __filename

// part of the global object is "process". global.process

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end(`hello world!\nDirectory: ${DIRNAME}\nFilename: ${FILENAME}`);
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
    console.log(`Directory: ${DIRNAME} Filename: ${FILENAME}`);
	

});

// to run:
// node server
