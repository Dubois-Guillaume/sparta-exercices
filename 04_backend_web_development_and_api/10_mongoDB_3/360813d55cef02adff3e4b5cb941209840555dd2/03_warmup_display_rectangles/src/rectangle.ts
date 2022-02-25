import { line } from "./line";
import { column } from "./column";

export function rectangle(width: number, height: number): string {
  const large = line(width);
  const high = column(height, large);
  return high;
}
