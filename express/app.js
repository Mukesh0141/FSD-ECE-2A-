import express from "express";
import fs from "fs";

const app = express()
app.get("/home", (req, res) => {
    res.send("Hello from express")
})  

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on port 3000");
})

fs.readFile("./index.html", "utf-8", (err, data) => {
    console.log(data);
})