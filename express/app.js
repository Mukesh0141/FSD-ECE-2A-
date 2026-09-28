// import express from "express";
// import fs from "fs";

// const app = express()
// app.get("/home", (req, res) => {
//     res.send("Hello from express")
// })  

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log("Server is running on port 3000");
// })

// fs.readFile("./index.html", "utf-8", (err, data) => {
//     console.log(data);
// })
import fs from "fs";
import express from "express";
const app = express();

const bookData = JSON.parse(fs.readFileSync("./data/books.json", "utf-8"))

app.get("/api/v1/books",(req, res) => {
   try{
    res.status(200).json ({
    status: "success",
    data : {
        book : bookData
    }
})

   } catch (error) {
    res.status(404).json({
        status:"fail",
        message: "data not found"
    })
   }
})

app.listen(3000, () => {
    console.log("server is runnning .....");
})

