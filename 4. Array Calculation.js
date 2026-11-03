// 1. Write a program to sum all elements in an array
let s=[1,2,3,4,5,6]
let h=0;
s.forEach(function(n){
       h+=n;
})
    console.log(h);

//Output:21    


// 2. Write a program to find the sum of all even numbers in an array.
let j=[2,3,4,7,6,1];
let a=0;
for(let i=0;i<j.length;i++){
    if(j[i]%2==0){
        a=a+j[i]
    }
}
console.log(a);

//Output:12