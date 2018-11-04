let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    let newObj = Object.assign({}, driver, { [key] : value});
    return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign(driver, { [key] : value});
}

function deleteFromDriverByKey(driver, key) {
    let newObj = { ...driver };
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}