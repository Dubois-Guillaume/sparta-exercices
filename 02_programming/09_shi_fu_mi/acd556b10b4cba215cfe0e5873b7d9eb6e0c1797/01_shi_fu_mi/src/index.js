const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome traveller, come with me and play Rock, Paper, Scissors");

shifumiGameSelector();

const shifumiChoice = ["rock", "paper", "scissors"];

function shifumiGameSelector(selector) {
  if (selector === "dumbAI") {
    shifumiGamePlayerVSAI();
  } else if (selector === "pvp") {
    shifumiGameTwoPlayers();
  }

  reader.question(
    "For a Player VS AI game write: dumbAI\nFor a Player VS Player game write: pvp\nChoose what type of game you want to play: ",
    (userChoice) => {
      shifumiGameSelector(userChoice);
    },
  );
}

function shifumiGamePlayerVSAI(dumbAI) {
  let player = "";
  let aI = "";
  let win = "";
  let aINumber;

  function showPlayerChoice(playerChoice) {
    if (playerChoice === shifumiChoice[0]) {
      player = "rock";
    } else if (playerChoice === shifumiChoice[1]) {
      player = "paper";
    } else if (playerChoice === shifumiChoice[2]) {
      player = "scissors";
    } else if (
      playerChoice !== shifumiChoice[0] &&
      playerChoice !== shifumiChoice[1] &&
      playerChoice !== shifumiChoice[2]
    ) {
      console.log("Please choose between: rock, paper ans scissors");
    }
    if (player === "rock") {
      console.log([
        "    ________        ",
        "---'   _ ,  |       ",
        "      (__(__)       ",
        "      (_____)       ",
        "      (____)        ",
        "---.__(___)         ",
      ]);
    } else if (player === "paper") {
      console.log([
        "      _______       ",
        "----'    ____)____  ",
        "            _______)",
        "            _______)",
        "           _______) ",
        "----.__________)    ",
      ]);
    } else if (player === "scissors") {
      console.log([
        "    ____           ",
        "---'    |________  ",
        "     (__)________) ",
        "        _________) ",
        "      (____)       ",
        "---.__(___)        ",
      ]);
    }
    return player;
  }

  function randomAIChoice() {
    aINumber = shifumiChoice[Math.round(Math.random() * 2)];
    return this;
  }

  function showAIChoice(aINumber) {
    if (aINumber === shifumiChoice[0]) {
      aI = "rock";
    } else if (aINumber === shifumiChoice[1]) {
      aI = "paper";
    } else if (aINumber === shifumiChoice[2]) {
      aI = "scissors";
    }
    if (aI === "rock") {
      console.log([
        "    ________        ",
        "---'   _ ,  |       ",
        "      (__(__)       ",
        "      (_____)       ",
        "      (____)        ",
        "---.__(___)         ",
      ]);
    } else if (aI === "paper") {
      console.log([
        "      _______       ",
        "----'    ____)____  ",
        "            _______)",
        "            _______)",
        "           _______) ",
        "----.__________)    ",
      ]);
    } else if (aI === "scissors") {
      console.log([
        "    ____           ",
        "---'    |________  ",
        "     (__)________) ",
        "        _________) ",
        "      (____)       ",
        "---.__(___)        ",
      ]);
    }
    return aI;
  }

  function result(player, aI) {
    if (player === "rock" && aI === "scissors") {
      win = "player";
    } else if (player === "paper" && aI === "rock") {
      win = "player";
    } else if (player === "scissors" && aI === "paper") {
      win = "player";
    } else if (player === "rock" && aI === "rock") {
      win = "Draw";
    } else if (player === "paper" && aI === "paper") {
      win = "Draw";
    } else if (player === "scissors" && aI === "scissors") {
      win = "Draw";
    } else if (aI === "rock" && player === "scissors") {
      win = "AI";
    } else if (aI === "paper" && player === "rock") {
      win = "AI";
    } else if (aI === "scissors" && player === "paper") {
      win = "AI";
    }
    return win;
  }

  function showResult(win) {
    if (win === "player") {
      console.log("\nPlayer win!\n");
    } else if (win === "AI") {
      console.log("\nAI win!\n");
    } else if (win === "Draw") {
      console.log("\nDraw\n");
    }
    return;
  }

  reader.question("Choose between rock, paper and scissors: ", (playerChoice) => {
    console.log("\nPlayer: \n");

    showPlayerChoice(playerChoice);

    randomAIChoice();

    console.log("\nA.I: \n");

    showAIChoice(aINumber);

    result(player, aI);

    showResult(win);

    reader.close();
  });
}

function shifumiGameTwoPlayers(twoPlayers) {
  let player = "";
  let playerTwo = "";
  let win = "";

  function changeAndShowPlayerChoice(playerChoice) {
    if (playerChoice === shifumiChoice[0]) {
      player = "rock";
    } else if (playerChoice === shifumiChoice[1]) {
      player = "paper";
    } else if (playerChoice === shifumiChoice[2]) {
      player = "scissors";
    }
    if (player === "rock") {
      console.log([
        "    ________        ",
        "---'   _ ,  |       ",
        "      (__(__)       ",
        "      (_____)       ",
        "      (____)        ",
        "---.__(___)         ",
      ]);
    } else if (player === "paper") {
      console.log([
        "      _______       ",
        "----'    ____)____  ",
        "            _______)",
        "            _______)",
        "           _______) ",
        "----.__________)    ",
      ]);
    } else if (player === "scissors") {
      console.log([
        "    ____           ",
        "---'    |________  ",
        "     (__)________) ",
        "        _________) ",
        "      (____)       ",
        "---.__(___)        ",
      ]);
    }
    return player;
  }

  function changeAndShowPlayerTwoChoice(playerTwoChoice) {
    if (playerTwoChoice === shifumiChoice[0]) {
      playerTwo = "rock";
    } else if (playerTwoChoice === shifumiChoice[1]) {
      playerTwo = "paper";
    } else if (playerTwoChoice === shifumiChoice[2]) {
      playerTwo = "scissors";
    }
    if (playerTwo === "rock") {
      console.log([
        "    ________        ",
        "---'   _ ,  |       ",
        "      (__(__)       ",
        "      (_____)       ",
        "      (____)        ",
        "---.__(___)         ",
      ]);
    } else if (playerTwo === "paper") {
      console.log([
        "      _______       ",
        "----'    ____)____  ",
        "            _______)",
        "            _______)",
        "           _______) ",
        "----.__________)    ",
      ]);
    } else if (playerTwo === "scissors") {
      console.log([
        "    ____           ",
        "---'    |________  ",
        "     (__)________) ",
        "        _________) ",
        "      (____)       ",
        "---.__(___)        ",
      ]);
    }
    return playerTwo;
  }

  function result(player, playerTwo) {
    if (player === "rock" && playerTwo === "scissors") {
      win = "player";
    } else if (player === "paper" && playerTwo === "rock") {
      win = "player";
    } else if (player === "scissors" && playerTwo === "paper") {
      win = "player";
    } else if (player === "rock" && playerTwo === "rock") {
      win = "Draw";
    } else if (player === "paper" && playerTwo === "paper") {
      win = "Draw";
    } else if (player === "scissors" && playerTwo === "scissors") {
      win = "Draw";
    } else if (playerTwo === "rock" && player === "scissors") {
      win = "playerTwo";
    } else if (playerTwo === "paper" && player === "rock") {
      win = "playerTwo";
    } else if (playerTwo === "scissors" && player === "paper") {
      win = "playerTwo";
    }
    return win;
  }

  function showResult(win) {
    if (win === "player") {
      console.log("\nPlayer one win!\n");
    } else if (win === "playerTwo") {
      console.log("\nplayer two win!\n");
    } else if (win === "Draw") {
      console.log("\nDraw\n");
    }
    return;
  }

  reader.question("Player One choose between rock, paper and scissors: ", (playerChoice) => {
    console.log("\nPlayer:\n");

    changeAndShowPlayerChoice(playerChoice);

    // console.log(player);

    reader.question("Player Two choose between rock, paper and scissors: ", (playerTwoChoice) => {
      console.log("\nPlayer Two:\n");

      changeAndShowPlayerTwoChoice(playerTwoChoice);

      // console.log(playerTwo);

      result(player, playerTwo);

      showResult(win);

      reader.close();
    });
  });
}
