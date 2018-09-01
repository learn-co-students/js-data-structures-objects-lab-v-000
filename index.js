// Write your solution in this file!
const driver = {name: 'Sam'};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]: value});
}

function deleteFromDriverByKey(driver, obj, key) {
  let newDriver= Object.assign({}, driver)
  delete newDriver.name;
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, obj, key) {
  delete(driver.name);
  return driver; 
}
