const readyForm = (reader) => {
  // Code here
  reader.question("Hello user! \n Are you ready for today ??!", (isReady) => {
    console.log(`WOW, ${isReady} ??!! Really Nice! Let's goo !!.`);

    reader.close();
  });
};

// Leave line below for tests to work
module.exports = readyForm;
