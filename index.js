const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value} );
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, { [key]: value} );
}

function deleteFromDriverByKey(obj, key, value) {
  const clonedDriver = updateDriverWithKeyAndValue(obj, key, value);
  delete clonedDriver[key];
  return clonedDriver;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  return delete obj[key];
}
