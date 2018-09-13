const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newdriver = Object.assign( {}, driver, { [key]: value })
  return newdriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const river = Object.assign({}, driver)
  delete river[key]
  return river
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}
