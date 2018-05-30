const driver = {}

function updateDriverWithKeyAndValue(obj, key, value){
  const newObj = { ...obj };
  newObj[key] = value;
  return newObj;
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
};

function deleteFromDriverByKey(driver, key){
    const newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver;
};

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
};