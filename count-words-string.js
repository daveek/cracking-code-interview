/***
 * with ChatGPT
 * */

const paragraph =
  "In order to succeed, your function must retum one command per tum up until the boxes are correctly positioned. The available commands are: arm moves one stack to the right. the arm moves one stack. the left, the arm grabs a box from the stack directly below It • the arm places a box onto the stack dIr.tly below it. Warning, you may execute a maximum of 200 commands, but It is not necessary. minimize the amount of instructions.";

function countWords(text) {
  const cleanedString = text.replace(/[^a-zA-Z0-9]/g, "");
  const words = cleanedString.split(" ");

  // console.log(words);
  const counts = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    counts[word] = (counts[word] || 0) + 1;
    // console.log(`Word: ${word}, counts: ${counts[word]}`);
  }

  // console.log("counts Obj: ", counts); {a: 2, the: 8, are: 3 ...}  // counts is an Object

  for (let word in counts) {
    if (counts[word] > 1)
      console.log(`Word: ${word}  Appears ${counts[word]} Times`);
  }

  //  2 OPTION: If I want to Cast COUNTS to an Array

  // let Arr = [];
  // for (let word in counts) {
  //   Arr.push(word);
  // }

  // OR ?? => Not Work, check Object.keys()
  // Object.keys(
  //   counts.map(function (key) {
  //     Arr.push({ [key]: counts[key] });
  //     return Arr;
  //   })
  // );

  // Arr.forEach((element) => {
  //   console.log(`Word> ${element}  Appears ${counts[element]} Times`);
  // });
}

countWords(paragraph);
