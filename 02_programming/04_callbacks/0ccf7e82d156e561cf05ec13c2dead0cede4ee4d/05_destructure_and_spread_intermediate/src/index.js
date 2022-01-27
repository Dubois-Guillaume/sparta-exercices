// Here are some examples

let storageHell = [
  [],
  ["IPad", "IPhone"],
  ["GameBoy color"],
  ["Nes", "Donkey kong 64"],
  ["Apex Legends Starter Pack", "LG 5K 27p screen"],
  ["Coffee Machine", "Azelad"],
];
// Should be cleaned this way => ['IPad', 'IPhone', 'GameBoy color', 'Nes', 'Donkey kong 64', 'Apex Legends Starter Pack', 'LG 5K 27p screen', 'Coffee Machine', 'Azelad']

function formatStorage(storageArray) {
  // Code your function here
  let formatedStorage = [];
  for (let i = 0; i < storageArray.length; i++) {
    // console.log(17, storageArray[i]);
    const temporaryArray = storageArray[i];
    for (let j = 0; j < temporaryArray.length; j++) {
      // console.log(19, temporaryArray[j]);
      // const [firstElement] = storageArray;
      // console.log("19", firstElement);
      formatedStorage.push(temporaryArray[j]);
    }
  }
  // console.log("22", formatedStorage);
  return formatedStorage;
}

// ↓ Feel free to uncomment this next line, or even create more to try everything you do ↓
// console.log(formatStorage(storageHell));

// Don't modify this, it is for the tests.
module.exports = formatStorage;
