/***
// Problem 
Rearrange the boxes in the factory to form stacks of equal height. 

// Rules 
You work in automated factory. The factory uses a simple robotic arm to move boxes around, The arm is capable of picking a box from a stack, and placing it on another stack. 
All boxes are on one of a given number of stacks, Your objective is to rearrange the stacks in order to have an equal number of boxes on each stack, If thls is not possible, any excess box must be stacked from left to right.
Your code will periodically receive the current state of the arm and the number of boxes on each stack. 

In order to succeed, your function must return one command per turn up until the boxes are correctly positioned. The available commands are:
 
  - RIGHT: arm moves one stack to the right.
  - LEFT: the arm moves one stack. the left.
  - PICK: the arm grabs a box from the stack directly below It.
  - PLACE: the arm places a box onto the stack directly below it. 

Warning, you may execute a maximum of 200 commands, but It is not necessary to minimize the amount of instructions. 

• Implementation 
Implement the function solve(clawPos, boxes, boxinClaw) that takes as arguments: an integer clawPos for the Index of the stack the arm is currently above. boxes an array of integers for the size of each stack. The integer boxInClaw which will be equal to 1 if the arm is carrying a box, 0 otherwise. 
 */

function solve(clawPos: number, boxes: number[], boxInClaw: boolean): string {
  // Write your code here
  // To debug: console.error('Debug messages...');

  const numStacks = boxes.length;
  const totalBoxes = boxes.reduce((acc, val) => acc + val);
  const targetBoxesPerStack = Math.floor(totalBoxes / numStacks);
  let excessBoxes = totalBoxes % numStacks;
  let targetStackIdx = 0;
  let clawHasBox = boxInClaw;

  // Move the claw to the target stack
  while (clawPos !== targetStackIdx) {
    if (clawPos < targetStackIdx) {
      clawPos++;
      return "moveRight";
    } else {
      clawPos--;
      return "moveLeft";
    }
  }

  // Move boxes to rearrange stacks
  for (let i = 0; i < numStacks; i++) {
    const stackSize = boxes[i];
    if (stackSize > targetBoxesPerStack) {
      const numBoxesToMove = stackSize - targetBoxesPerStack;
      for (let j = 0; j < numBoxesToMove; j++) {
        if (clawHasBox) {
          return "PLACE";
        } else {
          return "PICK";
        }
        clawHasBox = !clawHasBox;
      }
    } else if (stackSize < targetBoxesPerStack) {
      const numBoxesToMove = targetBoxesPerStack - stackSize;
      for (let j = 0; j < numBoxesToMove; j++) {
        if (clawHasBox) {
          return "PLACE";
        } else {
          return "PICK";
        }
        clawHasBox = !clawHasBox;
      }
    }
    excessBoxes -= stackSize - targetBoxesPerStack;
    if (excessBoxes < 0) {
      excessBoxes = 0;
    }
    if (excessBoxes > 0) {
      targetStackIdx = (targetStackIdx + 1) % numStacks;
      while (boxes[targetStackIdx] >= targetBoxesPerStack + 1) {
        targetStackIdx = (targetStackIdx + 1) % numStacks;
      }
      if (clawPos !== targetStackIdx) {
        if (clawPos < targetStackIdx) {
          clawPos++;
          return "RIGHT";
        } else {
          clawPos--;
          return "LEFT";
        }
      } else {
        if (clawHasBox) {
          return "PLACE";
        } else {
          return "PICK";
        }
        clawHasBox = !clawHasBox;
      }
      excessBoxes--;
    }
    targetStackIdx = (targetStackIdx + 1) % numStacks;
  }

  return "DONE";
}

/* Ignore and do not change the code below */

// game loop
while (true) {
  const clawPos: number = parseInt(readline());
  const boxInClaw: boolean = readline() !== "0";
  const stacks: number = parseInt(readline());
  const boxes: number[] = readline()
    .split(" ")
    .map((j) => parseInt(j))
    .slice(0, stacks);
  const oldWrite = process.stdout.write;
  process.stdout.write = (chunk) => {
    console.error(chunk);
    return true;
  };
  const action: string = solve(clawPos, boxes, boxInClaw);
  process.stdout.write = oldWrite;
  console.log(action);
}
/* Ignore and do not change the code above */
