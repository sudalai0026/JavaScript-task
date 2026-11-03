// 1. Write a function to return the square of a number
function power(a){
    return a*45;
}
console.log(power(2));

//Output:90

// 2. Write a function to debounce an event handler
function hii(a,b){
    let s;
    return function(){
        clearTimeout(s);
        s=setTimeout(a,b);
    };
}
{
    function oi(){
        console.log("zhadow...")
    }
}
let box=hii(oi,2000) // debounse
box();

//output:zhadow...