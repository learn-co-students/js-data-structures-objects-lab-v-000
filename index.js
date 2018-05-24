// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
 return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  return Object.assign(driver, {[key]: value});
}

function deleteFromDriverByKey(driver, key){
  const myDriver = Object.assign({}, driver);
  return delete myDriver.key
}

function destructivelyDeleteFromDriverByKey(driver, name){
 return delete driver.name;
}
