// Write your solution in this file!

const driver = { driver: name};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = { ...driver };
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  let newDriver1 = Object.assign({}, driver);
  delete newDriver1[key];
  return newDriver1;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  update = delete driver.name;
  return update;
}