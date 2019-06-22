// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = Object.assign({}, driver);
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver);
  newDriver.key.de;
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  driver.key.delete;
  return driver;
}