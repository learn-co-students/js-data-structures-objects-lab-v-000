// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  let newdriver = Object.assign({},driver,{[key]: value})
  return newdriver
}

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value){
  driver[key] = value
  return driver;
}

function deleteFromDriverByKey(driver, key){
  let clone = driver
  delete clone.key
  return clone.name
}

function destructivelyDeleteFromDriverByKey (driver, key) {
  delete driver[key]
  return driver
}
