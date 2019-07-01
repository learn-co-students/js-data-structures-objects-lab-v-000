// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue() {
  const driverUpdated = Object.assign({ name: 'Sam', address: '11 Broadway' }, driver);
  return driverUpdated;
}

function destructivelyUpdateDriverWithKeyAndValue() {
  driver = { name: 'Sam', address: '12 Broadway' };
  return driver;
}

function deleteFromDriverByKey(obj, key) {
  const driverUpdated = {...obj} 
  delete driverUpdated[key];
  return driverUpdated;
}

function destructivelyDeleteFromDriverByKey() {
  delete driver.name;
  return driver;
}

