const driver = {};

function updateDriverWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]:value });
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromDriverByKey(object, key) {
  newObject = Object.assign({}, object)
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromDriverByKey(object, key) {
  delete object[key];
  return object;
}
