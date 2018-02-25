// Write your solution in this file!

driver = {};

function updateDriverWithKeyAndValue(object, key, value) {
  const newObj = { ...object };

  newObj[key] = value;

  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
  object[key] = value;

  return object;
}

function deleteFromDriverByKey(object, key) {
  const newObj = { ...object };

  delete newObj[key];

  return newObj;
}

function destructivelyDeleteFromDriverByKey(object, key) {
  delete object[key];

  return object;
}
