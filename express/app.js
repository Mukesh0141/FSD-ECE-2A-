
import fs from "fs";
import express from "express";
const app = express();
app.use(express.json())

const bookData = JSON.parse(fs.readFileSync("./data/books.json", "utf-8"))

app.get("/api/v1/books",(req, res) => {
   try{
    res.status(200).json ({
    status: "success",
    count : bookData.length,
    data : {
        book : bookData
    }
    // count :{
    //     res.send(bookData.length())
    // }
})

   } catch (error) {
    res.status(404).json({
        status:"fail",
        message: "data not found"
    })
   }
})

app.get("/api/v1/books/:id",(req,res)=>{
    let id = req.params.id
    try{
    const book = bookData.find((book)=> book.id ===id);
    if(!book){
        res.status(400).json({
            status:"fail",
            message:`Book not found for this id :${id}`
        })

    }else{
        res.status(200).json({
            status:"success",
            data:{
                book:book
            }
        })
    }
}
    catch(error){
        res.status(500).json({
            status:"fail",
            message:error.message
        })
    }
});

app.post("/api/v1/books",(req,res)=>{
    console.log("post req");
    console.log(req.body)
    res.send(req.body)
})

app.listen(3000, () => {
    console.log("server is runnning .....");
})

