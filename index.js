const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = { ...driver };

  newDriver[key] = value;

  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
};

function deleteFromDriverByKey(driver, key) {
  newDriver = updateDriverWithKeyAndValue(driver,key)
  delete newDriver[key];
  return newDriver;
};

function destructivelyDeleteFromDriverByKey(driver,key) {
  delete driver[key];
  return driver;
};
