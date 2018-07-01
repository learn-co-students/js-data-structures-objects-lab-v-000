// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(driver, key1, value1) {
    const newObj = { ...driver };
    newObj[key1] = value1;
    return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key1, value1) {
    driver[key1] = value1;
    return driver;
}

function deleteFromDriverByKey(driver, key1) {
    const newObj = { ...driver };
    delete newObj[key1];
    return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key1) {
    delete driver[key1];
    return driver;
}
