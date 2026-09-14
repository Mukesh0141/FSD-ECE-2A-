const fs = require('fs');

const watcher = fs.watch('intro.txt', (eventType, filename) => {
    console.log("Event:", eventType);
    console.log("Filename:", filename);
});

        fs.watch("intro.txt", (eventType, filename) => {
    console.log("Event: ", eventType);
    console.log("Filename: ", filename);
})

setTimeout(() => {
    watcher.close();
    console.log("watcher closed")

}, 10000);