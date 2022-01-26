function checkFuelLevel(fuelLevel) {
  // Code here
  let isTheFuelOK;
  if (fuelLevel >= 20) {
    isTheFuelOK = "Fuel level: green";
  } else if (fuelLevel >= 10) {
    isTheFuelOK = "Fuel level: yellow";
  } else {
    isTheFuelOK = "Fuel level: red";
  }
  return isTheFuelOK;
}

function checkCargoHold(cargoCharge) {
  // Code here
  let cargoMaxCharge = 4;
  let isTheCargoHoldOK = "";
  if (cargoCharge.length === 4) {
    isTheCargoHoldOK = "Full";
  } else if (cargoCharge.length < 4) {
    let notEnoughCharge = cargoMaxCharge - cargoCharge.length;
    isTheCargoHoldOK = `Spaces available: ${notEnoughCharge}`;
  } else if (cargoCharge.length > 4) {
    let toManyCharge = cargoCharge.length - cargoMaxCharge;
    isTheCargoHoldOK = `Over capacity by ${toManyCharge} items.`;
  }
  return isTheCargoHoldOK;
}

// Do not remove last lines, it is for tests
module.exports = { checkFuelLevel, checkCargoHold };
