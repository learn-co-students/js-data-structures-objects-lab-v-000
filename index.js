const driver = {}

function updateDriverWithKeyAndValue(driverObj, key, value) {
  return Object.assign({}, driverObj, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driverObj, key, value) {
  driverObj[key] = value; return driver
}

function deleteFromDriverByKey(driverObj, key) {
  const newObj = Object.assign({}, driverObj)
  return delete newObj[key]
}

function destructivelyDeleteFromDriverByKey(driver, key) { return delete driver[key] }