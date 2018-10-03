// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  // returns a new Object with the original and new key value pairs
  // does not change original Object

  return Object.assign({}, driver, { [key]: value });

  
  // const newObj ={...driver};
  // newObj[key]=value;
  // return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  // returns an Object with the original and new key value pairs
  // modifies the original Object

  return Object.assign(driver, { [key]: value });

  // alternative:
  // driver[key]=value;
  // return driver
}

function deleteFromDriverByKey(driver, key){
  
  const newObj = Object.assign({}, driver)
  // alternative:
  // const newObj = {...driver}
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}