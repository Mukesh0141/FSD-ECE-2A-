const fs = require("fs");

fs.writeFile("notes.txt", "ECE A", (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("Data Successfully Written in the file notes.txt")
})

fs.readFile("notes.txt", (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(`read data : ${data}`)
})