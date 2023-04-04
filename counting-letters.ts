function solution(S: string): string {
  let occurrences: number[] = new Array(26); // What for?

  // 1) lets clean the string from special characters and spaces
  const cleanedString = S.replace(/[^a-zA-Z0-9]/g, "");

  // 2) lets separate each letter into an array
  const arrayLetters = cleanedString.split("");

  // 3) Lets create and object to count the most repeated letters
  const counts = {};

  for (let i: number = 0; i < arrayLetters.length; i++) {
    const letter = arrayLetters[i];
    counts[letter] = (counts[letter] || 0) + 1;
    // I'm counting the letters and updating the Object.
  }

  for (let id: number = 0; id < S.length; id++) {
    occurrences[S.charCodeAt(id) - "a".charCodeAt(0)]++;
  }

  let best_char: string = "a";
  let best_res: number = 0;

  str.slice(0, 4) + str.slice(5, str.length);

  for (let i: number = 1; i < 26; i++) {
    if (occurrences[i] >= best_res) {
      best_char = String.fromCharCode("a".charCodeAt(0) + i);
      best_res = occurrences[i];
    }
  }

  return best_char;
}

const S = "hello";
console.log(solution(S));
