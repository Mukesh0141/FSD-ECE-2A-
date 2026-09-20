import http from 'http';
import fs from 'fs';
//creating a basic server
const server= http.createServer((req,res)=>{
    console.log("Hello World");
    const order ={
        orderID:10987,
        destination:"Ghaziabad",
        source: "Delhi",
        username:"Mukesh"
    };
    // res.statusCode=200;
    // res.setHeader("Content-Type","application/json");

    const data=fs.readFileSync("index.html");
    console.log('${data}');

    res.writeHead(200,
        {"Content-Type":"application/json",
        "custom-header":"Hello Bachhoooo"
    });

   // const data=fs.readFileSync("data.json","utf-8");
    res.end(JSON.stringify(order));
});
server.listen(3000,"127.0.0.1",()=>{
    console.log("Server is running on port 3000");
    
}
)