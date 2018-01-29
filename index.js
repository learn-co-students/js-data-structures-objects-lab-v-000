const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, {[key]: value});
}

function deleteFromDriverByKey(obj, key) {
  let newObj = obj;
  return delete newObj['key'];
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  return delete obj[key];
}