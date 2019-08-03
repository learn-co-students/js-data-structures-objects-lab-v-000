// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  const newDriver = {...obj};
  newDriver[key] = value;
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
    return obj;
}

function deleteFromDriverByKey(obj, key) {
  //clones object, deletes key from clone, returns new Object
  const newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key];
  return obj;
}
