// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = { ...driver };
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver
}

function deleteFromDriverByKey(obj, key) {
  const newDriver = { ...driver };
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
