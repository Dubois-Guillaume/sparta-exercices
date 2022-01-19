const { check } = require("prettier");

function numberGame(reader, min = 1, max = 100) {
  // code here

  let winNumber = Math.ceil(Math.random() * (max - min) + min);
  console.log(winNumber); //a commenter pour le test

  const numberQuestion = () =>
    reader.question("Enter a number: ", (guess) => {
      console.log(guess.typeOf);
      function checkingFilter(guess) {
        console.log(Number.isNaN(guess));
        if (Number.isNaN(guess) === false) {
          console.log("This was not a number");
          numberQuestion();
        } else if (guess < min || guess > max) {
          console.log("The number is between 1 and 100");
          numberQuestion();
        } else if (guess > winNumber) {
          console.log("Too high");
          numberQuestion();
        } else if (guess < winNumber) {
          console.log("Too low");
          numberQuestion();
        } else if (guess === winNumber) {
          console.log("You won!");
          reader.close();
        }
      }
      checkingFilter(guess);
    });
  numberQuestion();
}

module.exports = numberGame;
