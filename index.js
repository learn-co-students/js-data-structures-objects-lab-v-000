// Write your solution in this file!

const driver = {};

// don't mutate
function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

// mutate
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, { [key]: value });
}

// don't mutate
function deleteFromDriverByKey(driver, key) {
  const newdriver = Object.assign({}, driver);
  delete newdriver[key];
  return newdriver;
}

// mutate
function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
