// Write your solution in this file!
let driver = {

}

function updateDriverWithKeyAndValue(driver, key, value) {
    // Object.assign(initialObject, additionalObject, additionalObject)
    // return value is the initialObject
    return Object.assign({}, driver, {[key]: value})
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
    delete driver[key];

    return driver;
}