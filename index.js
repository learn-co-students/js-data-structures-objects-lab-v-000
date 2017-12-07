// define driver
const driver = {};

// non-destructively update the driver
function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

// destructively update the driver
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

// non-destructively delete the key
function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver, key)
  delete newDriver[key];
  return newDriver;
}

// destructively delete the key
function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
