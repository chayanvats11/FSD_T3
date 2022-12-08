const { request } = require('express');
const express=require('express');
const app=express();

// app.use('/',(req,res,next)=>{
//     console.log("First use is called"); //This is always called
//     next();
// })

// app.use('/product',(req,res,next)=>{
//     console.log("This doesn't execute always");
//     res.send("Express Routing");
//     //Not running because our path has /product in it and we applied filtering therefore it is not printed
// })

// app.use('/new-product',(req,res,next)=>{
//     console.log("This seldom executes");
//     res.send("Express Hello")
// })

// Body Parsing
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false})); //middle-ware
app.get('/new-product',(req,res,next)=>{
    console.log("It runs on get request and new-product ");
    res.send("<form method='POST' action='/product'><input type='text' name='text1'><input type='submit' name='click me'></form>") //
})

app.post('/product',(req,res,next)=>{
    console.log("It runs on POST request and /product path");
    console.log(req.body.text1);
})
app.listen(3000);

//How request and res and next works ?
// Client se aaya toh request object use
// Client ko bhejna hai toh response ka use
// Callback function works after listening the request through the given port number
// Question - Client se aaya hai ye form and it has name,gender and position and we have to fetch it then we have to write above code with routing
// For age we can do req.body.text2 where we can set similar for others console.log(req.body.text2) and change here res.send("<form method='POST' action='/product'><input type='text' name='text1'><input type='submit' name='click me'></form>") //
// });

// Get request is send as attached with url and hence less secure
// Therefore bulk and confidential info is send through post request