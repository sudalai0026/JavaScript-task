// 1.  Write a program to check if a number is prime
let s=5;
for(let i=0;i<s;i++){
    if(s*i==5){
        console.log("5 is prime")
    }
}

//Output:5 is prime



// 2. Write a program to find the sum of digits of a number
let num = 1234;
let sum=0;
while(num>0){
    let digit = num % 10;

    sum = sum + digit;

    num = Math.floor(num / 10);
}

console.log(sum);

//Output:10


// 3. Write a program to reverse a number
let number="12345";
function summ(rever){
    return number.split("").reverse().join("")
}
console.log(summ(number))

//Output:54321


// 4. Implement a simple calculator that can add, subtract, multiply, and divide numbers
let a=3
let b=7
function ss(num){
    if(num == "+"){
      console.log(a+b)      
    }
    else if(num == "-"){
        console.log(a-b)
    }
    else if(num == "*"){
        console.log(a*b)
    }
        else if(num == "%"){
            console.log(a%b)
        }
    }

(ss("+"))

//Output:10