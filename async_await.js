 function fetchuserData() {
 return new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        resolve({
            id : 101,
            username : "john doe"
        });
    } else {
        reject(new Error("Data not found"))
    }
});
}
async function getuser(){
  try{
      const user = await fetchuserData();
      console.log(user);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

getuser();
