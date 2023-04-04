function solution(N: number): number {
  // Implement your solution here

  let stringNumber = N.toString();

  // Creat Arr of Values without 5
  let numberFrom;
  let values = [];

  for (let i = 0; i < stringNumber.length; i++) {
    if (stringNumber[i] === "-") {
      continue;
    }

    if (stringNumber[i] === "5") {
      numberFrom =
        stringNumber.slice(0, i) +
        stringNumber.slice(i + 1, stringNumber.length);
      console.log(+numberFrom);
      values.push(+numberFrom);
    }
  }

  // Traverse the number.. and delete the 5 in each and push into the ARR
  console.log(values);

  let maxValue = Math.max(...values);
  // Compare the New Arr all the Values to get the Max. value of the Arr.
  // console.log(~~numberFrom);
  return maxValue;
}
