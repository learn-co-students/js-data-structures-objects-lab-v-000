// Write your solution in this file!

driver = {}

updateDriverWithKeyAndValue = (driver, key, value) => {
  const update = {...driver}
  update[key] = value;
  return update
}

destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
  driver[key] = value
  return driver
}
deleteFromDriverByKey = (driver, key) => {
  const newDriver = Object.assign({}, driver)
  delete newDriver[key]

  return newDriver

}

destructivelyDeleteFromDriverByKey = (driver, key) => {
  delete driver[key]
  return driver
}
