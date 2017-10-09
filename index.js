driver = {};

updateDriverWithKeyAndValue = ( driver, key, value ) => {
  return Object.assign({}, driver, {[key]: value});
}

destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
  driver[key] = value;
  return driver;
}

deleteFromDriverByKey = (driver, key) => {
  const newDriver = Object.assign({}, driver);
  delete newDriver[key];
  return newDriver;
}

destructivelyDeleteFromDriverByKey = (driver, key) => {
  delete driver[key]
  return driver
}
