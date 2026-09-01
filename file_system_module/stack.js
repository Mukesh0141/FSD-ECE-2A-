const fs  = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'notes.txt');

fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("information about [notes.txt]:", typeof(stats));
  console.log("size of the file:", stats.size , "bytes"); 
  console.log(time of last access:", stats.atime);
});