// 1.Write a program that removes the last element from an array using `.pop()`.
let num=[1,2,3,4,5]; 
num.pop();
console.log(num);

//Output: [1, 2, 3, 4]


// 2.Write a program that adds an element to the beginning of an array using `.unshift()`
let number=[2,3,4,5];
number.unshift(1);
console.log(number);

//Output: [1, 2, 3, 4, 5]


// 3.Write a program that removes the first element from an array using `.shift()`
let digit=[5,6,7,8];  
digit.shift();
console.log(digit);

//Output: [6, 7, 8]


// 4.Write a program that adds multiple elements to the end of an array using `.push()`
let a=[10,20]; 
a.push(30,40);
console.log(a);

//Output: [10, 20, 30, 40]


// 5.Write a program that removes elements from index 1 to 3 in an array using `.splice()`.
let b=[100,200,300,400,500];   
b.splice(1,3);
console.log(b);

//Output: [100, 500]


// 6.Write a program that extracts a portion of an array using `.slice()`
let c=[1, [2, [3, 4]], 5]; 
let result=c.slice(1, 3);
console.log(result);

//Output: [[2, [3, 4]], 5]
