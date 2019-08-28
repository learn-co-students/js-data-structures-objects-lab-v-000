let driver = {};
function updateDriverWithKeyAndValue(obj, key, value) {
  const newObj = { ...obj };

  newObj[key] = value;

  return newObj;
}
function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
function deleteFromDriverByKey(obj, key) {
  const newObj = Object.assign({}, obj);
  // delete newObj.key;
  newObj[key] = undefined;
  return newObj;
}
function destructivelyDeleteFromDriverByKey(obj, key) {
  // delete driver.key;
  obj[key] = undefined;
  return driver;
}
