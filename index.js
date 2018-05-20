const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value})
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]: value})
}
function deleteFromDriverByKey(driver, key) {
  newDriver = Object.assign({}, driver)
return delete newDriver[key]
}
function destructivelyDeleteFromDriverByKey(driver, key) {
  return driver = delete driver[key]
}
