// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  return Object.assign(obj, obj, {[key]: value});
}

function deleteFromDriverByKey(obj, key){
  return Object.assign({});
}

function destructivelyDeleteFromDriverByKey(obj, key, value){
  return Object.assign(obj, {[key]: value});
}
