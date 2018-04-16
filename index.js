// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, { [key]: value });
}

function deleteFromDriverByKey(driver, key) {
  const cloneObj = { ...driver };
  const newObj = driver;
  console.log(cloneObj);
  console.log(newObj);
  delete cloneObj[key];
  return cloneObj;
}
// Why do I have to use the spread operator?
// Why can't I do `cloneObject = driver;` ?

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
