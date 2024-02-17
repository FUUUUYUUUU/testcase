function getQuestionPart(phrases: string[]): string[] {
  let maxLength = -1;
  let firstWordStart = -1;
  let secondWordStart = -1;
  let thridWordStart = -1;
  let result = []

  for (let i = 0; i < phrases.length; i++) {
    phrases[i] = phrases[i].split(" ").join("");
  }

  for (let i = 0; i < phrases[0].length; i++) {
    for (let j = 0; j < phrases[1].length; j++) {
      for (let k = 0; k < phrases[2].length; k++) {
        let [i_copy, j_copy, k_copy] = [i, j, k];
        let max = 0;

        while (
          phrases[0][i_copy] === phrases[1][j_copy] &&
          phrases[1][j_copy] === phrases[2][k_copy]
        ) {
          i_copy = i_copy + 1;
          j_copy = j_copy + 1;
          k_copy = k_copy + 1;
          max += 1;
        }

        if (maxLength === -1 || maxLength < max) {
          maxLength = max;
          firstWordStart = i;
          secondWordStart = j;
          thridWordStart = k;
        }
      }
    }
  }


  let wordFiltered = phrases[0].split("")
  wordFiltered.splice(firstWordStart,maxLength)
  result.push(wordFiltered.join(""))

  wordFiltered = phrases[1].split("")
  wordFiltered.splice(secondWordStart,maxLength)
  result.push(wordFiltered.join(""))

  wordFiltered = phrases[2].split("")
  wordFiltered.splice(thridWordStart,maxLength)
  result.push(wordFiltered.join(""))

  



  return result;
}

// getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]);
// getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]);


// console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]))
// console.log(getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]))