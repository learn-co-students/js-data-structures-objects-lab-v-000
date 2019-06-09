// Write your solution in this file!
 driver = {}
function updateDriverWithKeyAndValue(object, key, value){
  const driver = {...object}
  driver[key] = value
  return driver
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}
function deleteFromDriverByKey(driver, key){
  return delete driver.key
}
function destructivelyDeleteFromDriverByKey(driver, key){
  const dbj = Object.assign({}, driver)
  return delete driver.name
  return driver

}
