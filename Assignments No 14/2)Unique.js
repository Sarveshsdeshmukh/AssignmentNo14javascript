// 2. Only unique items are allowed.
// You are building a program that takes an array of numbers as input and you need to remove all the duplicates
// from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
// contains only the unique elements.

function UniqueNumbers(arrayNumbers){
    return new Set(arrayNumbers);
}

const myArray = [12,23,42,12,3,1,4,55,55,6];

console.log(UniqueNumbers(myArray));