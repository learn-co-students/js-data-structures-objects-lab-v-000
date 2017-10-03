// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  const newDriver = Object.assign({}, driver, {[key]: value});
  return newDriver;
};
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
};
function deleteFromDriverByKey(driver, key){
  const nDriver = Object.assign({}, driver);
  delete nDriver[key];
  return nDriver;
};
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
};
