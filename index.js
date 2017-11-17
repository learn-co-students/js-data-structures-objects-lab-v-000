// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, {[key]: value});
}

function destructivelyDeleteFromDriverByKey(obj, key, value) {
  delete obj[key];
  return obj
}

function deleteFromDriverByKey(obj, key, value) {
  newDriver = updateDriverWithKeyAndValue(obj, key, value);
  delete newDriver[key];
  return newDriver
}