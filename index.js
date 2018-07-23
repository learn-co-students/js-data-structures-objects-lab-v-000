// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  // create an object that isn't altered and a new object with new values
  const newObj = { ...obj };

  newObj[key] = value
  return newObj
};

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  // destructively updates the driver object
  obj[key] = value;
  return obj
};

function deleteFromDriverByKey(obj, key) {
  // non-destructively delets the key from a clone of the obejct
  // returns the new driver
  const newObj = { ...obj };
  delete newObj.key;
  return newObj['name'];
};

function destructivelyDeleteFromDriverByKey(obj, key) {
  // returns the object without the delete key/value pair
  // destructes the original object
  // Use bracket notation so the object delete the variable that's key. If I did obj.key it thinks key is the
  // name of the key not name.
  delete obj[key];
  return obj;
}
