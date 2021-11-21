const express = require("express");
const router = express.Router();
const path = require("path");
const basepath = (__dirname.split(path.sep).slice(0,-1)).join(path.sep);
console.log(path.resolve(basepath,"services","bookservice.js"));
const bookservice = require(path.resolve(basepath,"services","bookservice.js"));
const Book = require(path.resolve(basepath,"models","Book.js"))

router.get("/",(req,res)=>{
    let data = bookservice.getallbooks();
    res.send(data);
});

router.get("/search",(req,res)=>{
    const book_name = req.query.name;
    const author = req.query.author;
    if(book_name){let data = bookservice.searchbookbyname(book_name);
    res.send(data);
    }
    else if(author){
        let data = bookservice.searchbookbyauthor(author);
        res.send(data);
    }
    else{
        res.send("Error");
    }
    
});

router.post("/book",(req,res)=>{
    const body = req.body;
    const book = new Book(body.bookId,body.bookName,body.author,body.publisher,body.price);
    let data = bookservice.insertbook(book);
    res.send(data);
})
router.put("/book/update",(req,res)=>{
    const id = req.query.id;
    const body = req.body;
    const book = new Book(body.bookId,body.bookName,body.author,body.publisher,body.price);
    let data = bookservice.updatebook(id,book);
    res.send(data);
})

router.delete("/book",(req,res)=>{
    const id = req.query.id;
    let data = bookservice.deletebook(id);
    res.send(data);
})

module.exports=router;