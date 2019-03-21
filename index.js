// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, address, value) {
  const newObj = { ...driver };
   newObj[address] = value;
  return newObj;
}


function destructivelyUpdateDriverWithKeyAndValue(driver, address, value) {
  driver[address] = value;
  return driver;
}

function deleteFromDriverByKey(driver, name) {
  const newObj = Object.assign({}, driver);
  delete newObj.name;
  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, name) {
  delete driver.name;
  return driver;
}
