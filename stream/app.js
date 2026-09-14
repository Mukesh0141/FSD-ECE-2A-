import fs from 'fs';
//Readable stream
const readStream = fs.createReadStream("input.txt");

readStream.on("data", (chunk) => {
    console.log("Data Received: ");
    console.log("Data:",chunk)
})

readStream.on("end", () => {
    console.log("End of Stream");
})
readStream.on("error", (err) => {
    console.log("Error: ", err.message);
})

const writeStream = fs.createWriteStream("output.txt");
writeStream.write("Hello World\n");

writeStream.on("finish", () => {
    console.log("Write completed");
})  

writeSream.on("error", (err) => {
    console.log("Error: ", err);
})

const writeStream = fs.createWriteStream("output.txt");
writeStream.write("Hello World\n");
