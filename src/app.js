/**
 * app.js is the start file for the application
 */
const express = require('express');
const app =  express();
const path = require('path');
const port = 3000;
const bookRouter = require('./api-routes/bookrouter.js');


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/static",express.static(path.resolve(__dirname,"view","static")));
app.use("/books",bookRouter);
console.log(__dirname);

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"view","index.html"));
});

app.get("/availablebooks",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"view","books.html"));
});

app.get("/search",(req,res) =>{
    res.sendFile(path.resolve(__dirname,"view","search.html"));
});

app.get("/updatebook", (req,res) =>{
    res.sendFile(path.resolve(__dirname,"view","updatebook.html"));
});

app.get("/delete",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"view","deletebook.html"));
})
app.listen(port,()=>{
    console.log("Listening to port : " + port);
})