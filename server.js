const http=require('http'); //importing module
// const is global feature,http of L.H.S is variable name or const type modifier,require is function 
// When there is name followed by parenthesis then it's always a function but there is one case when it is not it's called sizeof(),typeof() because these are operators
// http towards R.h.s is core module

const server = http.createServer((req,res)=>{
//this http comes from above line because it returns an object from upper line
//createServer takes parameter which is calback function
    console.log("Hello JUET");
    res.write("<html><h1>Hello JUET</h1></html>")
}).listen(3000);
//3000 is port number listen means it is listening if some request comes from server and activates callback function and prints Hello JUET on console

//discuss request response model used in web transaction using node js as an example ??
// jack wants to create a server and written the above code agar listen ke baad port 3000 nahi likha hai toh advice is .listen(portnumber) must be written because when a request comes then it goes to that port number for response