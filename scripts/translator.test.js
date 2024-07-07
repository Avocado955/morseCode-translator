// This should test that the translate sentence and word functions work properly

import test from "node:test";
import { translateWords } from "./translator";

describe("Tests the functionality of the translateWord function for the morse code translator", () => {
  test("Given a valid string in English, will return the correct string in Morse Code", () => {
    expect(translateWords("Hello how are you", "morse")).toBe(
      ".... . .-.. .-.. --- / .... --- .-- / .- .-. . / -.-- --- ..-"
    );
    expect(translateWords("what is this", "morse")).toBe(
      ".-- .... .- - / .. ... / - .... .. ..."
    );
    expect(translateWords("my name is Marcus", "morse")).toBe(
      "-- -.-- / -. .- -- . / .. ... / -- .- .-. -.-. ..- ..."
    );
  });

  test("Given a valid string in Morse Code, will return the correct string in English", () => {
    expect(
      translateWords(
        ".... . .-.. .-.. --- / .... --- .-- / .- .-. . / -.-- --- ..-",
        "eng"
      )
    ).toBe("Hello how are you");
    expect(
      translateWords(".-- .... .- - / .. ... / - .... .. ...", "eng")
    ).toBe("what is this");
    expect(translateWords("-. .. -.-. . / .-- --- .-. -.-", "eng")).toBe(
      "nice work"
    );
  });
});
