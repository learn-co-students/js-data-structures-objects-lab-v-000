// Write your solution in this file!
const driver = {};
updateDriverWithKeyAndValue = (obj, key, value) => {
  const newObj = {...obj};
  newObj[key] = value;
  return newObj;
};
destructivelyUpdateDriverWithKeyAndValue = (obj, key, value) => {
  obj[key] = value;
  return obj;
}

deleteFromDriverByKey = (driver, key) => {
  const newDriver = Object.assign({}, driver);
  delete newDriver[key];
  return newDriver;
}

destructivelyDeleteFromDriverByKey = (driver, key) => {
  delete driver[key];
  return driver;
}
