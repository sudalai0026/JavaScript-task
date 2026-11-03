// 1. Write a program to print numbers from 1 to 10 using a `for` loop.
for(let i=0;i<10+1;i++)
console.log(i);

//Output: 1
//        2
//        3
//        4
//        5
//        6
//        7
//        8
//        9
//       10


// 2. Write a program to print the Fibonacci series up to a given number
let n=5;
let a=0;
let b=1

for(let i=0;i<n;i++){
    console.log(a);
let c=b+a;
    a=b;
    b=c;
}

//Output:0
//       1
//       1
//       2
//       3


// 3. Write a program to find the factorial of a number using a `while` loop.
let x=2;
let z=5;
while(x<z){
    x*=z*(x+z)*(x+10)
}
console.log(x)

//Output:840


// 4. Write a program to print a multiplication table for a given number
let sum=2;
for(let s=1;s<10;s++){
    let h=s*sum
console.log(s + " x " + sum + " = " + h)
}

//Output:1 x 2 = 2
//       2 x 2 = 4
//       3 x 2 = 6
//       4 x 2 = 8
//       5 x 2 = 10
//       6 x 2 = 12
//       7 x 2 = 14
//       8 x 2 = 16
//       9 x 2 = 18