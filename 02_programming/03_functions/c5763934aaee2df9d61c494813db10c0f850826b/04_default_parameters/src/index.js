function helloSpartan(soldier = "soldier") {
  // Code the function here.
  if (soldier !== "soldier") {
    console.log(`Hello ${soldier}: glad to know your name!`);
  } else {
    console.log("Hello soldier; not very talkative uh?");
  }
}

helloSpartan("Francis");
// Do not remove last lines, it is for tests
module.exports = helloSpartan;
