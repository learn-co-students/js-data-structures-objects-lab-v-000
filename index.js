// Write your solution in this file!

// defines a driver
const driver = {}

//returns a driver with the original key/value pair without modifying object driver(nondestructive)
function updateDriverWithKeyAndValue(object, key, value){
  const newObject = {...object};
	newObject[key] = value;
	return newObject;
}

//returns a driver with the original key/value pair modifying object driver (destructive)
function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

//delete(nondestructive)
function deleteFromDriverByKey(object, key) {
  const newObject = {...object};
	delete newObject[key];
	return newObject;
}

//delete(destructive)
function destructivelyDeleteFromDriverByKey(object, key) {
  delete object[key];
  return object;
}
