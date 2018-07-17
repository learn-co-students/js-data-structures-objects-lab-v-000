// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(obj, key, value){
    const new_driver = Object.assign({}, obj);
    new_driver[key] = value;
    return new_driver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

function deleteFromDriverByKey(obj, key){
    const new_driver = Object.assign({}, obj);
    delete new_driver[key];
    return new_driver;
}

function destructivelyDeleteFromDriverByKey(obj, key){
    delete obj[key];
    return obj;
}