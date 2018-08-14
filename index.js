// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue(driver, key, value){
  const newObj = {};
  newObj[key] = value;
  return {...driver, ...newObj};
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}
function deleteFromDriverByKey(driver, key) {
  const newObj = {...driver};
  return delete newObj.key
}
function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
