function sing() {
  // code here
  const song = [];
  let beer = 100;
  let lyrics = `${beer} bottles of beer on the wall, ${beer} bottles of beer.
  Take one down and pass it around, ${beer - 1} bottles of beer on the wall.`;
  for (let i = 99; i >= 3; i--) {
    beer--;
    song.push((lyrics = `${beer} bottles of beer on the wall, ${beer} bottles of beer.`));
    song.push((lyrics = `Take one down and pass it around, ${beer - 1} bottles of beer on the wall.`));
  }
  return song;
}

console.log(sing());

// Do not remove the following line, it is for tests
module.exports = sing;
