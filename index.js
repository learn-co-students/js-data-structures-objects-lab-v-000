// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
	const new_driver = {...driver};
	new_driver[key] = value;
	return new_driver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
	driver[key] = value
	return driver
}

function deleteFromDriverByKey(driver, key) {
	const new_driver = {...driver}
	console.log(delete new_driver[key])
	console.log(new_driver)
	return new_driver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
	delete driver[key]
	return driver
}