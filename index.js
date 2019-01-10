// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(driverObject, key, value) {
  	return Object.assign({}, driverObject, {[key]: value})
};

function destructivelyUpdateDriverWithKeyAndValue(driverObject, key, value) {
	driverObject[key] = value; 
	return driver
};

function deleteFromDriverByKey(driverObject, key) {
  	const newObject = Object.assign({}, driverObject)
  	return delete newObject[key]
};

function destructivelyDeleteFromDriverByKey(driver, key) {
	return delete driver[key]
};