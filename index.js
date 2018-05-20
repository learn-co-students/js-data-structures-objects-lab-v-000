// Write your solution in this file!
const driver = {} 

function updateDriverWithKeyAndValue(driver, key, value) {
  const newdriver = {...driver}
  newdriver[key] = value
  return newdriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const newdriver2 = Object.assign({}, driver)
  delete newdriver2[key]
  return newdriver2
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}