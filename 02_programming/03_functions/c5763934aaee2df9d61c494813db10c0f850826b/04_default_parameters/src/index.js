function helloSpartan(soldier = "Hello soldier; not very talkative uh?") {
  // Code the function here.
  if ( soldier === "soldier" ){
    console.log("Hello soldier; not very talkative uh?");
  } else if ( soldier === String ){
    console.log(`Hello ${soldier}: glad to know your name!`);
  } else if ( soldier !== String && soldier !== "soldier" ){
    console.log("Hello soldier; not very talkative uh?");
  }
}

// Do not remove last lines, it is for tests
module.exports = helloSpartan;
