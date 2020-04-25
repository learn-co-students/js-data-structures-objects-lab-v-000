// Write your solution in this file!

const driver = {name: "Steven", favoriteFood: "Sausage omelette"};

function updateDriverWithKeyAndValue (driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey (driver, key) {
  const driverCopy = Object.assign({}, driver); // Copy/clone the driver
  delete driverCopy[key]; // Delete the key/value pair from this driver copy
  return driverCopy; // Return that driver copy
}

function destructivelyDeleteFromDriverByKey (driver, key) {
  delete driver[key];
  return driver;
}