import http from 'http';
const server = http.createServer((req, res) => {
  console.log('Hello World')
  console.log(req.url)
//   res.end("Hello From Server")
     if(req.url === "/"){
        res.end("Hello From Home Page");
     }else if(req.url === "/about"){
        res.end("About Page")
     }

     if(req.url === "/contact"){
        res.end("Contact Page")
     }else if(req.url === "/services"){
        res.end("Services Page")
     }

    
        
});
  server.listen(3000,"127.0.0.1",()=> {
    console.log("server is running on http://127.0.0.1/3000/")
  });

   const data=fs.readFileSync("index.html");
      console.log('${data}');
  