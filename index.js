// Write your solution in this file!
let driver = {name: "Driver"}
function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]:value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]:value});
}

function deleteFromDriverByKey(driver, key, value) {
  let newDriver = Object.assign({}, driver);
  delete newDriver[key];
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
