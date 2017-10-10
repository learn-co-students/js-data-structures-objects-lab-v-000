// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = Object.assign({}, driver, {[key]: value});
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  const newObj = Object.assign(driver, {[key]: value});
  return newObj;
}


function deleteFromDriverByKey (driver, key) {
  const newObj = Object.assign({}, driver);

  delete newObj[key];

  return newObj;
}

function destructivelyDeleteFromDriverByKey (driver, key) {
   const newObj = delete driver[key];
   return newObj
}
