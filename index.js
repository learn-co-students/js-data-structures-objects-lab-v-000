// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}

//cannot use variable with dot notation
//when using brackets have to use string or variable
function deleteFromDriverByKey(obj, key){
  const newObj = {...obj};
  delete newObj[key]
  return newObj;
}

function destructivelyDeleteFromDriverByKey(obj, key){
  delete obj[key]
  return obj;
}
