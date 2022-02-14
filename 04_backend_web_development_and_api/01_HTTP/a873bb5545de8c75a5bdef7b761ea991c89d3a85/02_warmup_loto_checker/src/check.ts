import { lottery_draw } from "./lottery_draw";
import { Draw } from "./types";

export function checkIfIWon(ticket: Draw): void {
  // Code the function here
  const randomTicket = lottery_draw();
  console.log("tickets", randomTicket, ticket);
  const digit1 = ticket[0];
  const digit2 = ticket[1];
  const digit3 = ticket[2];
  const randomDigit1 = randomTicket[0];
  const randomDigit2 = randomTicket[1];
  const randomDigit3 = randomTicket[2];

  if (digit1 === randomDigit1 && digit2 === randomDigit2 && digit3 === randomDigit3) {
    console.log("You won the lottery!");
  } else {
    console.log("You lost...");
  }
}

// checkIfIWon([0, 0, 0]);
// checkIfIWon([1, 1, 1]);
// checkIfIWon([2, 2, 2]);
// checkIfIWon([3, 3, 3]);
