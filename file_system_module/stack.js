const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname, "notes.txt")

fs.stat(filePath, (err, stats) => {
    if (err) {
        console.log(err)
        return
    }

    console.log("Information about [notes.txt]", stats)
    console.log("size of the file [notes.txt], " + stats.size,"Bytes")
    console.log("Creation time of the file [notes.txt], " + stats.birthtime)
    console.log("Creation time in ISO format:", stats.birthtime.toISOString().split("T"))
    console.log("Last modified time of the file [notes.txt], " + stats.mtime)
})