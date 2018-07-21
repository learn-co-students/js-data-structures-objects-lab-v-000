const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = {...driver};

  newDriver[key] = value;

  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;

  return driver;
}


function deleteFromDriverByKey(driver, key) {
  const newDriver2 = {...driver};
    delete newDriver2[key];
    return newDriver2;
}


function destructivelyDeleteFromDriverByKey(driver, key, value) {
  delete driver[key];
  return driver;
}
