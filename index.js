// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(object, key, value){
  const newObj = { ...object };
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(driver, key){
  const newObj = { ...driver };
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
