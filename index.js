// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, {[key]: value});
}

function deleteFromDriverByKey(obj, key, value) {
  const newDriver = delete obj.key;
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(obj, key, value) {
  delete obj[key];
  return obj
}
