const driver = {};

function updateDriverWithKeyAndValue(obj, key, val){
  return Object.assign({}, obj, {[key]: val});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, val){
  return Object.assign(obj, {[key]: val});
}

function deleteFromDriverByKey(obj, key){
  return delete( Object.assign({}, obj)[key] );
}

function destructivelyDeleteFromDriverByKey(obj, key){
  return delete(obj[key]);
}
