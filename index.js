// Write your solution in this file!
const driver = {}


function updateDriverWithKeyAndValue(driver, key, value) {
   return Object.assign({}, driver, { [key]: value })
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value

  return driver
}

function deleteFromDriverByKey(obj, key) {
  const newDriver = Object.assign({}, obj)

    delete newDriver[key]

  return newDriver
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key]

  return obj
}
