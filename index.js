const driver = {}

function updateDriverWithKeyAndValue(obj, key, value){
  const newObj = { ...obj };

  newObj[key] = value;

  return newObj;

}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;

}

function deleteFromDriverByKey (driver, key) {
  const newObj = { ...driver };
  return delete newObj.key
}

function destructivelyDeleteFromDriverByKey (driver, name)  {

  return delete driver.name
}
