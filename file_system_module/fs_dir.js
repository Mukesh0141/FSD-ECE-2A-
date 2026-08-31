const fs = require('fs');

fs.mkdir("./myFolder1/myFolder2/myFolder3", { recursive: true }, (err) => {
    if(err){
        console.log(err);
        return;
    }

fs.writeFile("./myFolder/notes.txt", "Hello ECE A", (err) => {
    if(err){
        console.log(err);
        return;
    }

    console.log("Folder Created Successfully");
    fs.readdir("./myFolder", (err, files) => {
        if(err){
            console.log(err);
            return
        }
            console.log("Directory Contents: ", files);
    });
    });
});