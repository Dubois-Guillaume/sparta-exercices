import { Draw } from "./types";

export function lottery_draw(): Draw {
  const randomDraw: number[] = [];
  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.ceil(Math.random() * 3);
    randomDraw.push(randomNumber);
  }
  return randomDraw;
}
