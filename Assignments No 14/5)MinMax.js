// 05. 

// You are building a program that needs to find the maximum and minimum values in an array of numbers. You decide to write a function that can accomplish this task by taking an array of numbers as input and using the spread operator with the Math methods max() and min(). The function should return an object with two properties, max, and min, representing the maximum and minimum values in the input array, respectively. For example, if the input array is [5, 2, 7, 1, 9], the function should return an object { max: 9, min: 1 }.

function MaxMin(numberArray){
    let maximum;
    let minimum;
    maximum = Math.max(...numberArray)
    minimum =  Math.min(...numberArray) 
    return ["Maximum-->",maximum,"Minimum -->",minimum];
}

 let numberArray = [1,2,4,5,4,23];
 console.log(MaxMin(numberArray));