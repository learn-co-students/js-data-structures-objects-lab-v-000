// Write your solution in this file!
const driver = {name: "Sam"};


function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]: value});
}

function deleteFromDriverByKey(driver, key) {
  return newDriver = delete Object.assign({}, driver).key
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
