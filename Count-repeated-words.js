// paragraph Counting Words

const paragraph =
  "In order to succeed, your function must retum one command per tum up until the boxes are correctly positioned. The available commands are: arm moves one stack to the right. the arm moves one stack. the left, the arm grabs a box from the stack directly below It • the arm places a box onto the stack dIr.tly below it. Warning, you may execute a maximum of 200 commands, but It is not necessary. minimize the amount of instructions.";

function countWords(text) {
  const cleanedString = text.replace(/[^a-zA-Z0-9]/g, "");
  let splittedArrWords = cleanedString.split("");
  console.log(`Arr long: ${splittedArrWords.length}`);

  for (let i = 0; i < splittedArrWords.length - 1; i++) {
    let count = 0;
    let currentWord = splittedArrWords[i];

    for (let j = 1; j < splittedArrWords.length; j++) {
      if (currentWord == splittedArrWords[j]) {
        count = count + 1;
        console.log("word: ", currentWord);
      }
    }
    console.log(`Word: ${currentWord}, appears ${count} times`);
  }
}

countWords(paragraph);
