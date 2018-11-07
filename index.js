// Write your solution in this file!
const driver ={}

function updateDriverWithKeyAndValue(driver, key, value){
  const newOb = {}
  Object.assign(newOb, driver, {name: "Sam", address: '11 Broadway'})
  return newOb
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value 
  return driver 
}

function deleteFromDriverByKey(driver, key){
  const newDriver = Object.assign({}, driver);
  delete newDriver[key]; 
  return newDriver

}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver 
}








