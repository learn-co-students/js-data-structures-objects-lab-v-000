// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]: value});
}

function deleteFromDriverByKey(driver, key) {
  const object = Object.assign({}, driver);
  return delete object[key];
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  return Object.assign({}, driver, delete driver[key]);
}
