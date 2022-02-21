import { getRandomFace } from "./random-face";

function headOrTail(guess: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const randomFace = getRandomFace();
    if (guess === "head" || guess === "tail") {
      if (guess === randomFace) {
        resolve("Well done.");
      } else {
        reject("Nope.");
      }
    }
  });
}

export { headOrTail };
