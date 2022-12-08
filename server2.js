// const http=require('http');
//For creating server in Express
//express is third party module therefore we have to install it then import using first line
//express works on the principle of middleware
// What are middlewares in context of express?
// Middlewares is a http request handler that handles requests using next
//npm install --save express for installing then run it
const express=require('express');
const app=express();

app.use((req,res,next)=>{

    console.log("In the middleware");
    next();
})
//next function shifts to another middleware
app.use((req,res,next)=>{
    console.log("In another middleware");
    res.send("Hello from Express")
})

app.listen(3000);

//use of next or what do you mean middleware or how would you describe express js in reflection of node js
//describe middlewares in the context of node js