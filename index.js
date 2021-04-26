// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromDriverByKey(object, key, value) {
  let newDriver = Object.assign({}, object, {[key]: value})
  delete newDriver[key]
  return newDriver
}

function destructivelyDeleteFromDriverByKey(object, key, value) {
  delete object[key]
  return object

}