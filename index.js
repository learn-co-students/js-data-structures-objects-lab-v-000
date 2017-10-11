// Write your solution in this file!
let driver = {}

updateDriverWithKeyAndValue = (driver, key, value) => {
  driver = {...driver};
  driver[key] = value;
  return driver;
}

destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
  driver[key] = value;
  return driver;
}

deleteFromDriverByKey = (driver, key) => {
  driver = {...driver}
  driver[key] = undefined;
  return driver;
}

destructivelyDeleteFromDriverByKey = (driver, key) => {
  driver[key] = undefined;
  return driver;
}
