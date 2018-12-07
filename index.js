// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newObject = Object.assign({}, driver, {[key]: value});
  return newObject;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(obj, key) {
  const newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key];
  return obj;
}
