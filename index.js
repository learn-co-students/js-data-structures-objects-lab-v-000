// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  const new_driver = {...driver}
  new_driver[key] = value
  return new_driver

}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
   driver[key] = value
   return driver
}
function deleteFromDriverByKey(driver, key){
  return delete driver.key
}
function destructivelyDeleteFromDriverByKey(driver, key){
   return delete driver[key]


}
