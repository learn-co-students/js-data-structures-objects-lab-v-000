// Write your solution in this file!
    const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = {...driver}
      newDriver[key] = value
     return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = driver
      newDriver[key] = value
    return newDriver

}


function deleteFromDriverByKey(driver, key) {
  let newDriver = {...driver}
  delete newDriver[key]
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {

  let newDriver = driver
  delete newDriver[key]
  return newDriver

}
