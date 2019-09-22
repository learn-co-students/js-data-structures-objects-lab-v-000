// Write your solution in this file!
const driver = {name: 'Sam'};

function updateDriverWithKeyAndValue(obj, key, value){
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key){
  const newDriver = Object.assign({}, driver);
  delete newDriver['name'];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver.name;
  return driver;
}
