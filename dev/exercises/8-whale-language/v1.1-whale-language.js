/* 
TRANSFORM ALL PHRASES TO WHALE LANGUAGE
by MDN Data Software - Mirica Dragos-Neculai
v 1.1
*/

//17/01/2021
const generateLanguage = (inputS) => {
  //Whale language
  let avowels = ["a", "e", "i", "o", "u"];
  //Phrase translated
  let resultArray = [];
  //Loop through the given phrase
  for (let i = 0; i < inputS.length; i++) {
    // console.log(i);
    //Check through the whale letters and check if there are maches
    for (let j = 0; j < avowels.length; j++) {
      // console.log(j);
      if (inputS[i] === avowels[j]) {
        // console.log(input[i]);
        if (inputS[i] === "e") {
          resultArray.push("e");
        } else if (inputS[i] === "u") {
          resultArray.push("u");
        }
        resultArray.push(inputS[i]);
      }
    }
  }

  // Display the translated phrase with all the letters capitalized
  console.log(resultArray.join("").toUpperCase());
}

//run
generateLanguage('Mi chiamo Anna.');