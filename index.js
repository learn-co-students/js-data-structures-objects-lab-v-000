// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
    const newDriver = {...driver};
    newDriver[key] = value;
    return newDriver;
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(object, key){
    const newDriver = Object.assign({}, object);
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(object, key){
    let newDriver = delete object[key];
    return newDriver;
}