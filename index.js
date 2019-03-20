// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(obj, key, value){
  const newObj = {...obj}
  newObj[key] = value;

  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;

  return driver;
}

function deleteFromDriverByKey(driver, key){

  return Object.assign({}, driver, {[key]: undefined });

}

function destructivelyDeleteFromDriverByKey(driver, key){
  return Object.assign( driver, {[key]: undefined });
}
