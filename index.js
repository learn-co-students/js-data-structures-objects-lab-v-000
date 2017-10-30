// Write your solution in this file!

let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
	return Object.assign({}, driver, { [key]: value })
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
	 driver[key] = value
	 return driver
}

function deleteFromDriverByKey(driver, key) {
	 newDriver = (Object.assign({}, driver))
	 return delete newDriver[key]
}

function destructivelyDeleteFromDriverByKey(driver, key) {
	return delete driver[key]	
}

