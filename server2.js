// const fs = require("fs");

// fs.readFile("test.txt", (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data.toString());
// });

//     // OR ANOTHER WAY

// const fs = require("fs");

// fs.readFile("test.txt", "utf8", (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// console.log("log from outside of the block");

//     // a blocking method

// const fs = require("fs");

// try {
//     const data = fs.readFileSync("test.txt", "utf8");
//     console.log(data);
// } catch (err) {
//     console.error(err);
// }
// console.log("log from outside of the block");

//     // and a method using destructuring

// const { readFile, readFileSync } = require("fs");

// try {
//     const data = readFileSync("test.txt", "utf8");
//     console.log(data);
// } catch (err) {
//     console.error(err);
// }
// console.log("log from outside of the block");

//     // and a method using destructuring
//     // default behavior of writeFile is to OVERWRITE!!! be careful..
//     // use {flag: "a"} as the third argument in writeFile to append

// const { writeFile, writeFileSync } = require("fs");
// const newContent = "this is some new text"

// writeFile('test.txt', newContent, {flag: "a"}, (err) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     else {
//         console.log("content written ");
//     }
// })

    //      // renaming files
    // rename(originalFileName, newFileName)

// const { rename } = require("fs");

// rename("test.txt", "test2.txt", (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     } else {
//         console.log("File renamed ");
//     }
// });

    //      // deleting files
    // unlink(originalFileName)

const { unlink } = require("fs");

unlink("test2.txt", (err) => {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log("File deleted ");
    }
});
