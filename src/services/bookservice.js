const path = require("path");
const fs = require("fs");
const basepath =  (__dirname.split(path.sep).slice(0,-1)).join(path.sep);
const jsonFilePath = path.resolve(basepath,"resources","data.json");
module.exports ={
    getallbooks : function(){
        let data = fs.readFileSync(jsonFilePath);
        return JSON.parse(data);
    },
    searchbookbyname : function(name){
        let data = fs.readFileSync(jsonFilePath);
        let books = JSON.parse(data);
        return books.filter(book=>book.bookName===name);
    },
    searchbookbyauthor : function(author){
        let data = fs.readFileSync(jsonFilePath);
        let books = JSON.parse(data);
        return books.filter(book=>book.author===author);
    },
    deletebook : function(id){
        let data = fs.readFileSync(jsonFilePath);
        let books = JSON.parse(data);
        let index = books.findIndex(bookitem => bookitem.bookId === id);
        let deletedbook = books.splice(index,1);
        fs.writeFileSync(jsonFilePath,JSON.stringify(books,null,4));
        return deletedbook;
    },
    insertbook  : function(book){
        let data = fs.readFileSync(jsonFilePath);
        let books = JSON.parse(data);
        books.push(book);
        fs.writeFileSync(jsonFilePath,JSON.stringify(books,null,4));
        return book;
    },
    updatebook : function(id,book){
        let data = fs.readFileSync(jsonFilePath);
        let books = JSON.parse(data);
        let index = books.findIndex(bookitem => bookitem.bookId === id);
        books[index] = book;
        fs.writeFileSync(jsonFilePath,JSON.stringify(books,null,4));
        return book;
    }
}

