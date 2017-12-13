// Write your solution in this file!

const driver = {};


function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, { [key]: value });
// this function should take in a driver object, a key and a value. The function should not mutate the driver parameter and
// return a new driver that has an updated value for the key passed in.
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value; //can't use dot here as key is not literal name of key
  return driver;
 //this function should work the same as updateDriverWithKeyAndValue() but it should mutate the driver parameter passed in.
}

function deleteFromDriverByKey(driver, key) {
  const newObj = Object.assign({}, driver);  // create copy of object
  delete newObj[key]; // delete the kep from the copy of that object, not the original object
  return newObj; // return modified object copy
//this function should take in a driver object and a key. It should delete the key/value pair for the key that was passed in
//from the driver object. This should all not actually mutate the driver passed in.
}
// HINT: You might find deleteFromDriverByKey() to be a bit hard to write non-destructively. Think about how we learned to
// use Object.assign()

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;

  //easy peasy
}
