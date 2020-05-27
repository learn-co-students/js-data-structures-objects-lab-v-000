// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    //clone object and add new record to cloned object
    const newObj = Object.assign({}, driver)
    newObj[key] = value;
    return newObj;
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    //add to original object and update data
    driver[key] = value;
    return driver;
};

function deleteFromDriverByKey(driver, key) {
    //clone object and delete data when given a key
    const newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj;
};

function destructivelyDeleteFromDriverByKey(driver, key) {
    //delete original object item when given a key
    delete driver[key];
    return driver;
};