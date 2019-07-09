// Write your solution in this file!
const driver = { a_driver: "bob" };

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = { ...driver };
  newDriver[key] = value;

  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;

    return driver;
}

function deleteFromDriverByKey(driver, key) {
    const newDriver = { ...driver };
    //newDriver[key] = value;

    delete newDriver[key];
     return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {

  delete driver[key];
   return driver;
}
