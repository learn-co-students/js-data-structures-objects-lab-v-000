// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  return Object.assign(obj, {[key]: value});
}

function deleteFromDriverByKey(driver, key){
  const objectCopy = Object.assign({}, driver);
  delete objectCopy[key];
  return objectCopy;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
