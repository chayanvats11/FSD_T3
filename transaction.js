let err;

// function transact(title,callback){
//     //assumption merchant is saying function name is transact and dealer,retailer and wholesaler and these type should in upper caps then only it is called a transaction otherwise not
//     if(title.toUpperCase() != title)
//         err = new Error("Uppercase Error");
//     callback(err);
// }

// transact("DEALER",(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("DEALER as done Transaction");
// });

// transact("WHOLESALER",(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("WHOLESALER as done Transaction");
// });

// transact("RETAILER",(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("RETAILER as done Transaction");
// });


// For asynchronous

// function transact(title,callback){
//     //assumption merchant is saying function name is transact and dealer,retailer and wholesaler and these type should in upper caps then only it is called a transaction otherwise not
//     let rand = Math.floor(Math.random()*100);
//     if(title.toUpperCase() != title)
//         err = new Error("Uppercase Error");
    
// }

// console.log(Math.floor(Math.random()*100));


// // Now we don't know from below function that which of Dealer or Retailer or Wholesaler comes first
// function transact(title,callback){
//     //assumption merchant is saying function name is transact and dealer,retailer and wholesaler and these type should in upper caps then only it is called a transaction otherwise not
//     let rand = Math.floor(Math.random()*100);
//     if(title.toUpperCase() != title)
//         err = new Error("Uppercase Error");
//     setTimeout(()=>{callback(err)},rand);
    
// }

// transact("DEALER",(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("DEALER as done Transaction");
// });

// transact("WHOLESALER",(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("WHOLESALER as done Transaction");
// });

// transact("RETAILER",(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("RETAILER as done Transaction");
// });



// Callback Chaining is the solution for the above problem of random order and maintain the order such as DEALER then WHOLESALER then RETAILER
// function transact(title,callback){
//     //assumption merchant is saying function name is transact and dealer,retailer and wholesaler and these type should in upper caps then only it is called a transaction otherwise not
//     let rand = Math.floor(Math.random()*100);
//     if(title.toUpperCase() != title)
//         err = new Error("Uppercase Error");
//     setTimeout(()=>{callback(err)},rand);
    
// }

// // Pyramid of Doom in below function is seen and called Callback Hell because we are calling callback inside callback and then another callback inside callback
// transact("DEALER",(err)=>{
//     if(err)
//         console.log(err);
//     else
//     {
//         console.log("DEALER as done Transaction");
//         transact("WHOLESALER",(err)=>{
//         if(err)
//             console.log(err);
//         else
//         {
//             console.log("WHOLESALER as done Transaction");
//             transact("RETAILER",(err)=>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log("RETAILER as done Transaction");
//             });
//         }
//         });
//     }
// });


// We can avoid Callback Hell using JS Promises


