// 1. Reverse a string.
let rever=["a","b","c","d"]
rever.reverse();
console.log(rever);

//Output:[ 'd', 'c', 'b', 'a' ]


// 2. Check whether a string is a palindrome.
function palindrome(m){
    let s =m.split("").reverse().join('');
    return m==s;
}
console.log(palindrome("hellh"));

//Output:false


// 3. Count the number of vowels in a string.
function text(str){
    let vowels="aeiou";
    let count=0;
    for(let s of str){
    if(vowels.includes(s))
    count++;  
}
return count;
} 
console.log(text("how are my brother"));

//Output:5


// 4. Replace all occurrences of a substring within a string
let yours=("hello boys, hello student");
let recap=yours.replaceAll("hello","hi");
console.log(recap);

//Output:hi boys, hi student


// 5. Write a program to convert a string to uppercase.
let str=("student");
let change=(str.toUpperCase());
console.log(change);

//Output:STUDENT


// 6. Remove whitespace from both ends of a string.
let string=("   study     ");
let changes=(str.trim());
console.log(change);

//Output:study


// 7. Find the longest word in a string.
function vari(hi){
let bye=hi.split(" ");
return bye.sort((a,b)=>b.length-a.length)[0]
}
console.log(vari("hello my friends"));

//Output:friends


// 8. Check if a string contains a specific substring
let a=("hello bro am there")
if(str.includes("hello")){
    console.log("substring is there")
}
else{
    console.log("not found")
}

//Output:not found


// 9. split a string into an array of words
function hi(str){
  return str.split(" ");
}
console.log(hi("hi hello guys"))

//Output:[ 'hi', 'hello', 'guys' ]


// 10. Capitalize the first letter of each word in a string
function capital(str){
    return str.split(" ").map(word=>word[0].toUpperCase() + word.slice(1))
}
console.log(capital("hello guys how are you"))

//Output:[ 'Hello', 'Guys', 'How', 'Are', 'You' ]