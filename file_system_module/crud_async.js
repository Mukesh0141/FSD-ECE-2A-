const fs = require("fs");

fs.writeFile("notes.txt", "ECE A", (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("Data Successfully Written in the file notes.txt")
})

fs.readFile("notes.txt","utf8", (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})

const updateData = "Hello ECE A"
fs.appendFile("notes.txt", updateData, (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("File Updated Successfully");
})

fs.rm("notes.txt", (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("File Deleted Successfully");
});