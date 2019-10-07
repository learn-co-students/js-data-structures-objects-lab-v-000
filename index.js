const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  return (Object.assign({}, driver,{ [key]: value }));
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  return (Object.assign(driver, { [key]: value }));
}

function deleteFromDriverByKey(driver, key) {
  newObj = Object.assign({}, driver);

  delete newObj[key];

  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  return (delete driver[key]);
}
