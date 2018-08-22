// Write your solution in this file!

// WHY does this need to be a [] instead of a . 

const driver = {}; 

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = { ...driver};
  newDriver[key] = value; 
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = { ...driver};
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) { 
  delete driver[key];
  return driver;
} 
