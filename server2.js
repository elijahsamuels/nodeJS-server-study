// const fs = require("fs");

// fs.readFile("test.txt", (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data.toString());
// });

// OR ANOTHER WAY
// const fs = require("fs");

// fs.readFile("test.txt", "utf8", (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// console.log("log from outside of the block");

// a blocking method

// const fs = require("fs");

// try {
//     const data = fs.readFileSync("test.txt", "utf8");
//     console.log(data);
// } catch (err) {
//     console.error(err);
// }
// console.log("log from outside of the block");

// and a method using destructuring

const { readFile, readFileSync } = require("fs");

try {
    const data = readFileSync("test.txt", "utf8");
    console.log(data);
} catch (err) {
    console.error(err);
}
console.log("log from outside of the block");
