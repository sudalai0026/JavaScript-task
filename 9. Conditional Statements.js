// 1. Write a program to check if a number is positive, negative, or zero.
function number(x){
    if(x>1){
        console.log("positive")
    }else if(x<-1){
        console.log("negetive")
    }else{
            console.log("zero")
        }
}
number(33)

//Output:positive


// 2. Write a program to find the grade of a student based on marks (A, B, C, D, F).
function mark(z){
    if(z>90 || z>70){
        console.log("A Garde")
    }
    else if(z>70 || z>60){
        console.log("B Garde")
    }
    else if(z>50 || z>60){
        console.log("C Garde")
    }
    else if(z>50 || z>40){
        console.log("D Garde")
    }
    else if(z>40 || z>30){
        console.log("C Garde")
    }
    else{
        console.log("fail")
    }
    
}
mark(20)

//Output:fail


// 3. Write a program to check if a year is a leap year
function sum(year){
    if(year%4===0){
        console.log("leap year")
    }
    
    else{
        console.log("normal year")
    }
}
sum(2012)

//Output:leap year