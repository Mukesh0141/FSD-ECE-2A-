const fs = require('fs');

function sizeChecker(filename) {
    const limit = 2 * 1024 * 1024; // 2MB limit

    const stats = fs.statSync(filename);
    const fileSize = stats.size;

    if (fileSize > limit) {
        console.log("File is too large:", fileSize, "bytes");
        return false;
    } else {
        console.log("File is within limit:", fileSize, "bytes");
        return true;
    }
}

sizeChecker("notes.txt");