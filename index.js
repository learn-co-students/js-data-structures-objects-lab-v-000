// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue (driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value) {
  driver[key] = value;

  return driver;
}

function deleteFromDriverByKey (driver, key) {
  const ddriver = Object.assign({}, driver);

  delete ddriver[key];

  return ddriver;
}

function destructivelyDeleteFromDriverByKey (driver, key) {
  delete driver[key];

  return driver;
}
