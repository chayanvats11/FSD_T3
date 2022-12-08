// let cleanRoom = new Promise((resolve,reject)=>{ //Promise is taking one argument that is callback function and callback function is taking two arguments that is reject and resolve
//     // Initialize a variable isClean with false and then checked if the promise is resolved or rejected
//     let isClean = false;



//     if(isClean)
//         resolve("Kitchen Clean");
//     else
//         reject("Kitchen Unclean");
// })

// cleanRoom
// .then((resolved)=>{ 
//     //then function also takes callback function as argument and this callback function takes argument whatever is the resolved value
//     console.log(resolved + "\nYou will get an Ass-Cream");
// }) 
// //We can write as many as then and catch and it's called Chaining Promises
// // .then(()=>{

// // })
// .catch((rejected)=>{
//     //catch function also takes callback function as argument and this callback function takes argument whatever is the rejected value
//     console.log(rejected+"\nYou will NOT get an Ass-Cream"); //this rejected contains Kitchen Unclean
// })

// //Callback Hell maintainance se bachte hai aur baar baar error handling sirf ek baar check karni padti hai in Prmoise chaining

function transact(title){
    //assumption merchant is saying function name is transact and dealer,retailer and wholesaler and these type should in upper caps then only it is called a transaction otherwise not
    return new Promise((resolve,reject)=>{
    let random = Math.floor(Math.random()*100);
    if(title.toUpperCase() != title)
        reject("Not in Uppercase");
    setTimeout(()=>{resolve(title)},random);
})
}

transact("DEALER")
.then((resolved)=>{
    console.log(resolved + " performs transaction");
    return transact("WHOLESALER");
})
.then((resolved)=>{
    console.log(resolved + " performs transaction");
})
.catch((rejected)=>{
    console.log(rejected + " performs transaction");
})