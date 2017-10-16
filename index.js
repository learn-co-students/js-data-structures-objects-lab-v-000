// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  let newDriverArray = Object.assign({}, driver);
  newDriverArray[key] = value;
  return newDriverArray;
}

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  let newDriverArray = Object.assign({}, driver);
  delete newDriverArray[key];
  return newDriverArray;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
