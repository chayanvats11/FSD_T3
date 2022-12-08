const express = require("express");
const app = express();
const path =require("path");

app.use("/",(req,res,next)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname,'htmlrequest.html'));
});

app.listen(3000);