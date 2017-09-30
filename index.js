// Write your solution in this file!
const driver = {

}

function updateDriverWithKeyAndValue(driver, newKey, newValue){
  return Object.assign({}, driver, {[newKey]: newValue} );
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  return Object.assign(driver, {[key]: value});
}

function deleteFromDriverByKey(driver, key){
  const newDriver = {...driver};
  delete newDriver[key];

  return newDriver;
};

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver
};
