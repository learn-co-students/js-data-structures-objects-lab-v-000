const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  driverClone = {...driver}
  driverClone[key] = value
  return driverClone
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key){
  driverClone = {...driver}
  delete driverClone[key]
  return driverClone
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}
