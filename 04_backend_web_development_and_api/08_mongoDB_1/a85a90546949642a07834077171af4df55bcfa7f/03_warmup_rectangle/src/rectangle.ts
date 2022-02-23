export function rectangle(width: number, height: number): string {
  let rectangle = "";
  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      rectangle += "*";
    }
    rectangle += "\n";
  }
  return rectangle;
}
