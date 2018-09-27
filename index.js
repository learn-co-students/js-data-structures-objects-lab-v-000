const driver = {};
function updateDriverWithKeyAndValue(driver, key, value){
  const newa = {};
  newa[key] = value;
  return Object.assign({}, driver, newa);
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const ndriver = {...driver};
  delete ndriver[key];
  return ndriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}