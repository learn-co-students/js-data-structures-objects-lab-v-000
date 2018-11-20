// Write your solution in this file!

let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]: value});
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  return delete driver[key];
}

function deleteFromDriverByKey(driver, key) {
  temp = Object.assign({}, driver);
  return delete temp[key];
}
