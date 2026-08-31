const fs = require("fs");

fs.writeFile("notes.txt", "ECE A", (err) => {
    console.log("Data Successfully Written in the file notes.txt")
})