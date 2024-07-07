import translateWords from "./translator.js";
import { createNewTextElement, removeChildOfType } from "./dom-utils.js";

// Grab the 2 text areas
const englishInput = document.getElementById("tAE");
const morseInput = document.getElementById("tAM");
// Grab the button
const translateButton = document.getElementById("translateBtn");

//Get the error message p tag
const errorDiv = document.getElementById("errorMessage");

// This will change when each was the last element with focus so we can choose the last textArea which was focused and take the string from that and translate it
let englishLastFocus = true;

englishInput.addEventListener("focus", (e) => {
  console.log("English input has been selected");
  englishLastFocus = true;
  removeChildOfType(".msg", errorDiv);
});

morseInput.addEventListener("focus", (e) => {
  console.log("Morse input has been selected");
  englishLastFocus = false;
  removeChildOfType(".msg", errorDiv);
});

// Once the button is pressed, get the text from the last focused textArea and translate it, then display on the other textArea
translateButton.addEventListener("click", (e) => {
  e.preventDefault();
  //Get the last focused and use if statement
  if (englishLastFocus) {
    //Check if any of the symboles are present first and throw an error if there are
    console.log(/[?!.[]()*&^%$#@+=<>,;:-_]/g.test(englishInput.value));
    if (/[?!.[]()*&^%$#@+=<>,;:-_]/.test(englishInput.value)) {
      //Display message and return
      createNewTextElement(
        "p",
        "Invalid characters inside of English Text Area! Only words using A-Z are currently translatable",
        errorDiv,
        ["msg"]
      );
    }
    //Taking English and translating to Morse Code
    //check if the first character is a letter
    if (/[A-Za-z]/.test(englishInput.value[0])) {
      console.log("Is english", englishInput.value[0]);
      try {
        const translatedWord = translateWords(englishInput.value, "morse");
        morseInput.value = translatedWord;
      } catch (error) {
        createNewTextElement("p", error.message, errorDiv, ["msg"]);
      }
    } else {
      console.log("Not english", englishInput.value[0]);
      //Display an error message saying wrong string type in this text box
      createNewTextElement(
        "p",
        "English only inside the English Text Area, Morse Code to be translated should be in the Morse Code Text Area",
        errorDiv,
        ["msg"]
      );
    }
  } else {
    //Taking Morse Code and translating to English
    //check if the first character is a . or -
    if (!/[A-Za-z]/.test(morseInput.value[0])) {
      console.log("Not english", morseInput.value[0]);
      try {
        const translatedWord = translateWords(morseInput.value, "english");
        englishInput.value = translatedWord;
      } catch (error) {
        createNewTextElement("p", error.message, errorDiv, ["msg"]);
      }
    } else {
      console.log("Is english", morseInput.value[0]);
      //Display an error message saying wrong string type in this text box
      createNewTextElement(
        "p",
        "Morse Code only inside the Morse Code Text Area, English to be translated should be in the English Text Area",
        errorDiv,
        ["msg"]
      );
    }
  }
});
