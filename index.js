// Write your solution in this file!
const driver = {} //empty object

function updateDriverWithKeyAndValue (driver, key, value) {
    const nondestructive = {...driver};
    nondestructive[key] = value;
    return nondestructive
}

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value){
    driver[key] = value
    return driver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver

}

function deleteFromDriverByKey(driver, key) {
    const nondestructiveDelete = Object.assign({}, driver);
    delete nondestructiveDelete[key];
    return nondestructiveDelete;
}

