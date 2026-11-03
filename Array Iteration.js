// 1. Iterate over an array using for...of.
let num=[10,20,30,40]
for(let number of num)
console.log(number);

// Output:10
//        20
//        30
//        40


// 2. Iterate over an array using the `.forEach()` method.
let n=[1,2,3,4,5]
n.forEach(function(num){
    console.log(num+2)});

//Output:3
//       4
//       5
//       6
//       7


// 3. Find the largest number in an array using a loop
let h=[1,2,3,23,17,4,5,9.6,7,8,];
let s=0;
for(let c=1;c<h[c];c++){
    if(h[c]>s){
        s=h[c];
    }
}
console.log(s)

//Output:23 