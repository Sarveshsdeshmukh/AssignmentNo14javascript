// 01. Count the occurrences.

// You are building a word count generator that will take a large string of text as input and output the words and the number of times they are present in the string. Your task is to write a function that can count the occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can assume that the string only contains alphabetic characters and spaces.

function countOccurrences(string) {
    const words = string.split(" ");
    const wordCount = new Map();
  
    for (const word of words) {
      if (wordCount.has(word)) {
        wordCount.set(word, wordCount.get(word) + 1);
      } else {
        wordCount.set(word, 1);
      }
    }
  
    return wordCount;
  }
  

const string = "Hello Bachho !Hello Bachho !Hello Bachho !Hello Bachho !Hello Bachho !Hello Bachho !Hello Bachho !Hello Bachho !Hello Bachho ! "

console.log(countOccurrences(string));