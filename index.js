// Write your solution in this file!
const driver = {
}

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, {[key]: value})
}


function destructivelyUpdateDriverWithKeyAndValue (driver, key, value) {
  driver[key] = value;

  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newdriver = Object.assign({}, driver, key);
  delete newdriver[key];
  return newdriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
 delete driver.name

return driver

}
