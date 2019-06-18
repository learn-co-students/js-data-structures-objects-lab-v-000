// Write your solution in this file!
const driver = {name: 'Sam'};

function updateDriverWithKeyAndValue(driver, key, value) {
  newArray = Object.assign({}, driver, {[key]: value});
  return newArray;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  Object.assign(driver, {[key]: value});
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  newdriver = Object.assign(driver, delete driver[key])
  delete newdriver[key]
}

function deleteFromDriverByKey(driver, key) {
  newdriver = Object.assign({}, driver)
  delete newdriver[key]
  return newdriver
}

function destructivelyDeleteFromDriverByKey(driver, key, value) {
  delete driver[key]
  return driver;
}
