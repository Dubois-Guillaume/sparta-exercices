export function column(numberOfLines: number, lineContent: string): string {
  let characters = "";
  for (let i = 0; i < numberOfLines; i++) {
    characters += `${lineContent}\n`;
  }
  return characters;
}
