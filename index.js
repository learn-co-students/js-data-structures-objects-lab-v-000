const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const updated = Object.assign({}, driver, {[key]:value});
  return updated;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]:value});
}

function deleteFromDriverByKey(driver, key) {
  const updated = Object.assign({}, driver);
  delete updated[key];
  return updated;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}