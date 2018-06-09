// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, {[key]:value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value

  return driver
}

function deleteFromDriverByKey(driver, key){
  let new_drivers = Object.assign({}, driver)

  delete new_drivers[key]

  return new_drivers
}
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]

  return driver
}
