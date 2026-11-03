// 1. Create an object to store your name and age, then print them
const details={
    name:"sudalai",
    age:"20",
}
console.log(details);

//Output:{ name: 'sudalai', age: '20' }

// 2. Write a function to merge two objects
const person={
    name:"john",
    age:"40",
}  

const job={
    location:"chennai",
    role:"developer",
}
 
const result={...person,...job};

console.log(result);

//Output:{ name: 'john', age: '40', location: 'chennai', role: 'developer' }


// 3. Iterate over object properties using for...in.
let human={
    name:"joe"
    
}
for(let i in human)
    console.log(human[i])

//Output:joe