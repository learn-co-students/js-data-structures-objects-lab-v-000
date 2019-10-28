// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  const newDriver = {...obj};
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue (obj, key, value) {
  obj[key] = value;
  return obj;
} 

function deleteFromDriverByKey (obj, key) {
  const newObj = {...obj}
  delete newObj[key];
  return newObj;
  
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}

// I tried to delete using the dot notation, delete driver.key, mas não funcionou. pq?
