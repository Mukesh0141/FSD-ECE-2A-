
const promise1 = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        resolve({
            id : 101,
            username : "john doe"
        });
    } else {
        reject(new Error("Data not found"))
    }
})

promise1
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.error(error.message);
});

const promise2 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve({
            id : 102,
            username : "mukesh"
        });
    } else {
        reject(new Error("data not fetched"));
    }
});
promise2
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.error(error.message);
});


Promise.all([promise1, promise2])
.then((responses) => {
    console.log(responses);
})
.catch((error) => {
    console.error(error);
});


Promise.race([promise1, promise2])
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.error(error);
});