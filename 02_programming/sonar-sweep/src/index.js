// code here
import { report } from "./input_data.js";

function mesurements(reports) {
  let howManyLargerMesurements = 0;
  let currentMesurements = 0;
  let newMesurements = 0;

  for (let i = 0; i < reports.length; i++) {
    newMesurements = reports[i];
    // console.log(howManyLargerMesurements);
    if (newMesurements > report[i - 1]) {
      howManyLargerMesurements++;
      // console.log(newMesurements, "increased");
    } else if (newMesurements < report[i - 1]) {
      // console.log(newMesurements, "decreased");
    }
    currentMesurements = newMesurements;
  }
  console.log(`There is ${howManyLargerMesurements} larger mesurements`);
  return howManyLargerMesurements;
}

function mesurementsSum(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  return sum;
}

function threeMesurments(reports) {
  let howManyLargerSum = 0;
  let currentSum = 0;
  let newSum = 0;
  let firstMesurements = 0;
  let secondMesurements = 0;
  let thirdMesurements = 0;

  for (let i = 0; i < reports.length; i++) {
    if (Number.isInteger(reports[i + 2])) {
      firstMesurements = reports[i];
      secondMesurements = reports[i + 1];
      thirdMesurements = reports[i + 2];
      newSum = mesurementsSum(firstMesurements, secondMesurements, thirdMesurements);
      if (newSum > reports[i - 1]) {
        // console.log(currentSum, "<", newSum, "increased");
        howManyLargerSum++;
      } else if (newSum < reports[i - 1]) {
        // console.log(currentSum, ">", newSum, "decreased");
      }
      currentSum = newSum;
    }
  }
  console.log(`There is ${howManyLargerSum} larger sum`);
  return howManyLargerSum;
}

mesurements(report);
threeMesurments(report);
