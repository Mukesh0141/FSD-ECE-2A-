const fs = require('fs');
function sizeChecker(filename) {
    const limit = 2*1024*1024; // 2MB in bytes
    const stat = fs.statSync(filename);

    if(stat.size > limit) {
        console.log (`File should be less than ${limit} bytes.`);
    }
    else {
        console.log("File has been submitted successfully.");
    }
}

sizeChecker("notes.txt");