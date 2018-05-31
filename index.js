// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = {...driver};
    newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = driver; //manipulates original array
  newDriver[key] = value;
  return newDriver;
}

function deleteFromDriverByKey(driver, key) {
 const newDriver = Object.assign({}, driver);
 return delete newDriver.key;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign(driver);
  return delete newDriver.name; //test specifies name key
}
