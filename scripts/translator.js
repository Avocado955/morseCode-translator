// This script should handle the translation of morse code and english depending on the given condition
// The first function should be given a full string of either English or Morse code and send it word by word to be translated and then display the translation
import translationObject from "../data/translation";

/**
 * 
 * @param {string} sentence - The sentence to be translated
 * @param {string} currentLang - The current language the sentence is in, either "eng" or "morse"
 * @returns {string} The translated sentence if it was given a valid sentence
 */
export const translateSentence = (sentence, currentLang) => {
    // Check which language the sentence is
    // Make a variable of which is the end language
    // Check if the sentence is valid for that language or is valid to be translated by the translator (currently not translating numbers or symbols)
    // If the sentence is already in the language to be translated to, return it
    // break the sentence into words and pass into the word translator
    // rejoin the sentence with either spaces if English or "/" if morse code
    // return the sentence
}

/**
 * @param {string} word - The word which should be translated in either English or Morse Code
 * @param {string} translateTo - Which way the word should be translated, either "eng" or "morse" respectively
 * @returns {string} A new string with the word translated into the given translateTo
 */
export const translateWord = (word, translateTo) => {
    // As the parent function checks if it is already translated, dont need to check again
    // check if translateTo is valid
    if (translateTo !== "eng" || translateTo !== "morse") {
        throw new Error("Invalid Translate language. The provided language to be translated to was not English or Morse Code")
    }
    // break apart the word and translate it
    // set a variable to return
    let translatedWord = "";
    // split it
    const wordArr = word.split("");
    // map it
    if (translateTo === "eng") {
        // take in Morse Code and translate to English
        const engTranslated = wordArr.map((morseLetter) => {
            // need to get the key as it holds the English letter. using the value we check each of the keys
            return englishLetter = Object.keys(translationObject).find(key => translationObject[key] === morseLetter);
        })
        translatedWord = engTranslated;
    } else {
        // take in English and translate to Morse Code
        const morseTranslated = wordArr.map((englishLetter) => {
            return translationObject[englishLetter];
        })
        translatedWord = morseTranslated;
    }
    // Could just return it inside the above right after translating, which would remove the need for translated word outside the if statement
    // Will do that after this so both methods are saved in git
    // join it
    // add " " between letters if translating to morse code
    if (translateTo === "eng") {
        return translatedWord.join("");
    } else {
        return translatedWord.join(" ");
    }
}
