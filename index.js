// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
	const newObj = {...driver}
	return Object.assign(newObj, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
	Object.assign(driver, {[key]: value})
	return driver
}

function deleteFromDriverByKey(driver, key){
	const copy = {...driver};
	delete copy[key];
	return copy;
}

function destructivelyDeleteFromDriverByKey(driver, key){
	delete driver[key]
	return driver
}

