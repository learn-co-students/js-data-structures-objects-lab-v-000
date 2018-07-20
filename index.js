// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  return Object.assign(driver, { [key]: value });
}

function deleteFromDriverByKey(driver, key){
  const cloneDriver = Object.assign({}, driver);
  delete cloneDriver.key;
  return key;
}

function destructivelyDeleteFromDriverByKey(driver, name){
  delete driver.name;
  return driver;
}
