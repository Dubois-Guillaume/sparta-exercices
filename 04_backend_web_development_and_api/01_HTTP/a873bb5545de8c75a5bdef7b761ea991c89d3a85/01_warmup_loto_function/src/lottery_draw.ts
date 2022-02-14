type Draw = number[];

export function lottery_draw(): Draw {
  const randomDraw: number[] = [];
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.round(Math.random() * 100);
    randomDraw.push(randomNumber);
  }
  return randomDraw;
}
