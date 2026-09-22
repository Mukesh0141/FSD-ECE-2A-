
const http= require("http");
const fs= require("fs");
fs.readFileSync("/config.json", "utf-8", (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});

const server= http.createServer((req,res)=>{
     
});


server.listen(3000,"127.0.0.1",()=>{
    console.log("Server is running on port 3000");
    
});

