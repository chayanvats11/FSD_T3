let x;
function change1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            x = 1;
            resolve();
        },1000);
    })
}

function change2(){
    return x = x+1;
}

change1()
.then(()=>{
    console.log(x);
    return change2();
})

.then((param)=>{
    console.log(param);
})