// let x; //undefined

// function change1(callback){
//     setTimeout(()=>{ //setTimeout ka first parameter is callback function
//         x = 1; //setting x = 1 asynchronously
//         callback(x);
//     },1000); //x value set time takes 1s
// }

// function change2(){
//     x = x+1; //x = 2
//     console.log(x);
// }

// change1((x)=>{
//     if(x){ //if x is not undefined
//         change2();
//     }
//     else
//         console.log('Error');

// });