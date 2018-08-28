// Write your solution in this file!
driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign( obj, { [key]: value });
}

function deleteFromDriverByKey(driver, key) {
const newDriver = Object.assign({}, driver);

  delete newDriver.name
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete  driver.name
    return driver;
}
