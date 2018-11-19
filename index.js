// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(driverObj, key, value) {
	const newObj = {...driverObj};
	newObj[key] = value;
	return newObj;
}


function destructivelyUpdateDriverWithKeyAndValue(driverObj, key, value) {
	driverObj[key] = value;
	return driverObj;
}

function deleteFromDriverByKey(driver, key) {
	const newObj = {...driver};
	delete newObj[key];
	return	newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
	delete driver[key];
	return driver;
}