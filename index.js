// Write your solution in this file!
driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    const newdriver = {...driver};
    newdriver[key] = value;
    return newdriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    const newdriver = {...driver};
    delete newdriver[key];
    return newdriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}