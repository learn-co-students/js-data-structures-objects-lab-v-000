// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value});

    const newDriver = {};    
    newDriver[key] = value; 
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value; 
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    const newDriver = driver[key];
    return newDriver;

    delete driver.key; 
    return driver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}