// This script should handle the translation of morse code and english depending on the given condition
// The first function should be given a full string of either English or Morse code and send it word by word to be translated and then display the translation


/**
 * 
 * @param {string} sentence - The sentence to be translated
 * @param {string} currentLang - The current language the sentence is in, either "eng" or "morse"
 * @returns {string} The translated sentence if it was given a valid sentence
 */
const translateSentence = (sentence, currentLang) => {
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
const translateWord = (word, translateTo) => {
    // check if translateTo is valid
    // check if the word is valid opposite of the translateTo, if translating to english, make sure its morse code and vise vesa
    // break apart the word and translate it
    // add " " between letters if translating to morse code
}
export default translateSentence;