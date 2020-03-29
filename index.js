const driver = {};

function updateDriverWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  obj[key] = value;

  return obj;
}

function deleteFromDriverByKey(obj, key){
  let updatedDriver = Object.assign({}, obj);

  delete updatedDriver[key];
  return updatedDriver;
}

function destructivelyDeleteFromDriverByKey(obj, key){
  delete obj[key];
  return obj;
}
