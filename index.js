// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
	driverTwo = { ...driver };
	driverTwo[key] = value;
	return driverTwo;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
	driver[key] = value;
	return driver;
}

function deleteFromDriverByKey(driver, key) {
	rtn = { ...driver };
	delete rtn[key];
	return rtn;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
	delete driver[key];
	return driver;
}
