function theEFilter(sentences) {
  const theFilter = sentences.filter(sentences => sentences.includes("e") || sentences.includes("E"));
  return theFilter;
}

// Do not remove the following line, it is for tests
module.exports = theEFilter;
