// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  //newObj = {...driver};
  return Object.assign({}, driver, {[key]: value})
  //newObj[key] = value;

  //return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  //driver[key] = value;
  return Object.assign(driver, {[key]: value});
  //return driver;
}

function deleteFromDriverByKey(driver, key) {
  newDriver = Object.assign({}, driver);

  delete newDriver[key];

  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
