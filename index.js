// Write your solution in this file!

const driver = {}


function updateDriverWithKeyAndValue(driver, key, value) {
  //can also use ES6 Spread Operators
  //return {...driver, ...{[key]: value } }
  return Object.assign({}, driver, {[key]: value })
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  //can also use ES6 Spread Operators
  //const newDriver = {...driver }
  const newDriver = Object.assign({}, driver)
  delete newDriver[key]
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}