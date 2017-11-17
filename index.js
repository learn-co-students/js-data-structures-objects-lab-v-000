const driver = {name: "Bill"};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]: value});
}

function deleteFromDriverByKey(driver, key) {
  const driverCopy = Object.assign({}, driver);
  return delete driverCopy[key];
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  return delete driver[key];
}
