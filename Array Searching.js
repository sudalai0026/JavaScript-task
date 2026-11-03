// 1. Find pairs in an array that sum up to a target number
let number=[2,4,6,7,3,8]  
let tar=10
for(let i=0;i<number.length;i++)
    {
    for(let s=i+1;s<number.length;s++)
        {
        if(number[i] + number[s] === tar)
         {
            console.log(number[i], "+" ,number[s], "=", tar)
         }

    }

}

//Output: 2 + 8 = 10
//        4 + 6 = 10
//        7 + 3 = 10


// 2. Write a program to find the second largest number in an array
let num=[10,90,40,50];  

num.sort((a,b)=>a-b);

console.log(num[2]);

// Output: 50


// 3. Write a function to find all subarrays of an array that sum up to a target number.
let arr=[2,8,4,6,7,3,8,0,1]; 
let target=10;
function subarr()
        {
    for(let i=0;i<arr.length;i++)
        {
        sum=0;
    for(let s=i;s<arr.length;s++)
        {
        sum+=arr[s];
    if(sum==target)
        {
        console.log(arr.slice(i,s+1));  
        }  
      }    
    }
}
 subarr();

// Output: [2, 8], [4, 6], [6, 4], [7, 3], [3, 8, 0, 1]

 

// 4. Write a program that finds the first even number in an array using `.find()`
let n=[11, 15, 18, 21, 24];
let final=n.find
(function(n){
    return n%2==0;
});
console.log(final)

//Output: 18


// 5. Write a function to find the missing number in an array of consecutive numbers
let array=[1,2,5,]

for(let i=0;i<array.length;i++){
    if(array[i+1] - array[i] !=1)
        
    array[i]+=1

    console.log(array[i])
}

// Output: 3, 4