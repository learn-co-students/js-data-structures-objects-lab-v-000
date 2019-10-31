// Write your solution in this file!
const driver = {car: 'Accord'};
function updateDriverWithKeyAndValue (obj, key, value) {
  const newObj = { ...obj};
  newObj[key] = value;
  return newObj;
}
const newDriver = updateDriverWithKeyAndValue(driver,'car', 'Fit');

function destructivelyUpdateDriverWithKeyAndValue (obj, key, value) {
  obj[key] = value;
  return obj;
}
const newerDriver = destructivelyUpdateDriverWithKeyAndValue(driver, 'car', 'Jalopy');

function deleteFromDriverByKey (obj, key) {
  const newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
}
deletedDriver = deleteFromDriverByKey(driver, 'car');

function destructivelyDeleteFromDriverByKey (obj, key) {
  delete obj[key];
  return obj;
}

driver = destructivelyDeleteFromDriverByKey(driver, 'car');
