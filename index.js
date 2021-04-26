// Write your solution in this file!
const driver = {};
let updateDriverWithKeyAndValue = (driver, key, value) => {
  return Object.assign({}, driver, { [key]: value});
};
 
let destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
  driver[key] = value;
  return driver;
};

function deleteFromDriverByKey(driver, key){
  let newObj = Object.assign({}, driver);
  delete newObj[key];
  return newObj;
};

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
};
