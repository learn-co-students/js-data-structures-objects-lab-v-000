// Write your solution in this file!
const driver = { }

function updateDriverWithKeyAndValue(driver, key, value){
    let newObj = { } 
    newObj[key] = value;
    // return newObj;
    return Object.assign({}, driver, newObj);
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key){
    const newObj = { }
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
}