// Write your solution in this file!
const driver = { name: "dee"};

function updateDriverWithKeyAndValue(driver){
  const newDriver = {...driver};
  newDriver.address = "11 Broadway"

  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){

  driver.address = "12 Broadway";
  return driver;
}

function deleteFromDriverByKey(driver){
  const newerDriver = {...driver};
    delete newerDriver.name;
  return newerDriver;
}

function destructivelyDeleteFromDriverByKey(driver){
  delete driver.name;
  return driver;
}
