const fs = require('fs');
const watcher = fs.watchFile('intro.txt', (curr, prev) => {
    console.log("Current file stats:", curr.birthtime.toISOString());
    console.log("Previous file stats:", prev.birthtime.toISOString());
});

// setTimeout(() => {
//     fs.unwatchFile('intro.txt', watcher);
//     console.log("watcher closed")
// }, 10000);

