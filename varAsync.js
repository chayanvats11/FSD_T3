let x;
async function change1(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            x = 1;
            resolve();
        },1000);
    }); //promise ends not function

    let result = await promise;
    change2();
}//end of function change1

function change2(){
    x = x + 1;
    console.log(x);
}

change1();