const driver = {}

function updatedDriverWithKeyAndValue(driver, value, key){
  const newdriver Object.assign({}, driver);
  newdriver[key] = value;
  return newdriver
}

function updatedDriverWithKeyAndValue(driver, value, key){
  driver[key] = value
  return driver
}

function deleteFromDriverKey(driver, key) {
  const newdriver = Object.assign({}, driver)
   delete newdriver[key]
   return newdriver
  }
  
  function destructivelyDeleteFromDriverByKey(driver,key) {
    delete driver[key];
    return driver
  }