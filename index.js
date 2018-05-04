// Write your solution in this file!
let driver = {name: "Sam"};

function updateDriverWithKeyAndValue(obj, key, value){
  let newDriver = Object.assign({}, obj);
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(obj, key){
  let newDriver = Object.assign({}, obj);
  delete(newDriver[key]);
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(obj, key){
  delete(obj[key]);
  return obj;
}