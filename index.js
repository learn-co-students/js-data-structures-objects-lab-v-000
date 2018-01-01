// Write your solution in this file!
const driver = {}
function updateDriverWithKeyAndValue(driver, key, value) {
  let new_object = Object.assign({}, driver)
  new_object[key]=value;
  return new_object;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key]=value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
let new_object = Object.assign({},driver);
delete new_object[key];
return new_object;

}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
