// This script should handle the translation of morse code and english depending on the given condition
// The function should be given a full string of either English or Morse code and go over it word by word and then display the translation
import translationObject from "../data/translation.js";

// After running a test and realising that this function works with a whole string and not just a word
/**
 * @param {string} word - The word which should be translated in either English or Morse Code
 * @param {string} translateTo - Which way the word should be translated, either "english" or "morse" respectively
 * @returns {string} A new string with the word translated into the given translateTo
 */
const translateWords = (word, translateTo) => {
  // check if translateTo is valid
  if (translateTo !== "english" && translateTo !== "morse") {
    throw new Error(
      "Invalid Translate language. The provided language to be translated to was not English or Morse Code"
    );
  }
  // map it
  if (translateTo === "english") {
    // break apart the sentence and translate it
    // split it at the space between words
    const letterArr = word.split(" ");
    //grab all the keys outside of the map
    const keys = Object.keys(translationObject);
    // This doesnt work outside of the if statement cause each morse code would be broken into individual '.'s and '-'s which only returns e and t
    // take in Morse Code and translate to English
    const engTranslated = letterArr.map((morseLetter) => {
      // need to get the key as it holds the English letter. using the value we check each of the keys
      const englishLetter = keys.find(
        (key) => translationObject[key] === morseLetter
      );
      return englishLetter;
    });
    // join it
    return engTranslated.join("");
  } else {
    // break apart the words and translate it
    // split it at each letter
    const letterArr = word.split("");
    // take in English and translate to Morse Code
    const morseTranslated = letterArr.map((englishLetter) => {
      return translationObject[englishLetter.toUpperCase()];
    });
    // join it
    // add " " between letters if translating to morse code
    return morseTranslated.join(" ");
  }
};

export default translateWords;
