// var x=0;
// function fun(){
//     x++;
// }

// x=5;
// fun();
// fun();
// fun();

// console.log(x);



// function fun(){
//     var x=0;
//     x++;
//     return x;
// }

// fun();
// fun();
// fun();

// console.log(fun());

// Use Closures for resolution of this purpose

var count=(function(){
    var x = 0;
    // x = 0 is known to inner function even after 
    function inner(){
        x++;
        return x;
    }
    return inner;
})();

count();
count();
count();

console.log(count());