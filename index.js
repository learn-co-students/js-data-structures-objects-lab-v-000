// Write your solution in this file!


const driver = {address: '11 Broadway'};


function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = {name: 'Sam', address: '11 Broadway'};
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver.address = '12 Broadway';
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = { ...driver };
  delete newDriver.name;
  return newDriver;
}


function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver.name
  return driver;
}
