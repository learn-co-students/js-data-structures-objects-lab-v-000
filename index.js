// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  newDriver = {}
  Object.assign(newDriver, driver)
  newDriver[key] = value
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  newDriver = {}
  Object.assign(newDriver, driver)
  delete newDriver[key]
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}
