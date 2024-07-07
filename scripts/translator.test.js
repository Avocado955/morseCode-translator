// This should test that the translate sentence and word functions work properly

const errorMessage =
  "Invalid Translate language. The provided language to be translated to was not English or Morse Code";

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
    ).toBe("HELLO HOW ARE YOU");
    expect(
      translateWords(".-- .... .- - / .. ... / - .... .. ...", "eng")
    ).toBe("WHAT IS THIS");
    expect(translateWords("-. .. -.-. . / .-- --- .-. -.-", "eng")).toBe(
      "NICE WORK"
    );
  });

  it("Throws an error when the given translateTo parameter is null or incorrect", () => {
    expect(() => {
      translateWords("hello", 12);
    }).toThrow(errorMessage);
    expect(() => {
      translateWords("oh yes", "french");
    }).toThrow(errorMessage);
  });
});
