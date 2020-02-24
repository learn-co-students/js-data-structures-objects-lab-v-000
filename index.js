let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]:value});
}

function deleteFromDriverByKey(driver, key) {
  return delete {...driver}.key;

  // // alternative:
  // const driver_clone = driver;
  // return delete driver_clone.key;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  return delete driver[key];
}
