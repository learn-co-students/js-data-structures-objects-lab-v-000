// Write your solution in this file!

const driver = {};

// updateDriverWithKeyAndValue()- this function should take in a driver object, a key and a value. The function should not mutate the driver parameter and return a new driver that has an updated value for the key passed in.

function updateDriverWithKeyAndValue (driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}


function destructivelyUpdateDriverWithKeyAndValue (driver, key, value) {
  driver[key] = value;

  return driver;
}

function deleteFromDriverByKey (driver, key) {
  const newObj = Object.assign({}, driver);

  delete newObj[key];

  return newObj;
}

function destructivelyDeleteFromDriverByKey (driver, key) {
  delete driver[key];

  return driver;
}
