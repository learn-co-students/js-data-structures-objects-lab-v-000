const driver = {
	key1: 'value1',
	key2: 'value2',
	key3: 'value3',
	key4: 'value4'
}


function updateDriverWithKeyAndValue(driver, key, value) {
	return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
	driver[key] = value;
	return driver;
}

function deleteFromDriverByKey(driver, key) {
	const newDriver = Object.assign({}, driver);
	delete newDriver[key];
	return newDriver;

}


function destructivelyDeleteFromDriverByKey(driver, key) {
	delete(driver[key]);
	return driver;
}