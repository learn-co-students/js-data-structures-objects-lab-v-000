// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
	return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
	driver[key] = value;
	return driver;
}

function deleteFromDriverByKey(driver, key) {
	let obClone = Object.assign({}, driver);
	delete obClone[key];
	return obClone;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
	delete driver[key];
	return driver;
}