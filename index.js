const driver = {};

function updateDriverWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]: value});
}
function destructivelyUpdateDriverWithKeyAndValue(obj,key,value){
  return Object.assign(obj,{[key]:value});
}

function deleteFromDriverByKey(obj, key){
  newDriver = delete obj.key;;
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(obj, key){
  delete obj[key];
  return obj;
}
