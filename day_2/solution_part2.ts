var fs = require("fs");
var textByLine = fs.readFileSync("data.txt").toString().split("\n");

// Part 2
const checkValidPassword = (data: string[]): number => {
  let count = 0;
  let arr = [];
  let validCount = 0;
  for (let i = 0; i < data.length; i++) {
    let min = Number(data[i].split(" ")[0].split("-")[0]);
    let max = Number(data[i].split(" ")[0].split("-")[1]);
    let letter = data[i].split(" ")[1].split(":")[0];
    let letters = data[i].split(" ")[2].split("");

    for (let j = 0; j < letters.length; j++) {
      if (letters[j] === letter && j === min - 1) {
        validCount++;
      }
      if (letters[j] === letter && j === max - 1) {
        validCount++;
      }
      if (j  === letters.length-1 && validCount === 1) {
        count++;
        validCount = 0;
      } 
      if (j  === letters.length-1 && validCount > 1) {
        validCount = 0;
      } 
    }
  }
  return count;
};

console.log(checkValidPassword(textByLine));
