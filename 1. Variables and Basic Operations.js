// 1. Declare a variable with your name and print it.
let name="zhadow"
console.log(name)

//Output:zhadow

// 2. Swap two numbers without using a third variable.
let x=10;
let z=20;
[x,z]=[z,x];
console.log(x);
console.log(z);

//Output:20
//       30

// 3. Check whether a number is even or odd using %
let number=10;
if(number%2==0){
    console.log("Even");
}
else{
    console.log("Odd");
}

//Output:Even


// 4. Find the largest of three numbers using comparison operators.

let a=40;
let b=50;
let c=60;
if(a<b && a<c){
    console.log(c);
}
else{
    console.log("no largest number")

}

//Output:60