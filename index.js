// Write your solution in this file!
const driver = {}
function updateDriverWithKeyAndValue(driver, key, value){
   const newDriver = { ...driver};

   newDriver[key] = value;

   return newDriver
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver.address = value;

  return driver
}

function deleteFromDriverByKey(driver, key){
  const newdriver = {...driver} // {... (insert whatever the objects name is here)} creates a clone of the original variable when assigned with a new name.

  delete newdriver.name;

  return newdriver
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver.name;

  return driver
}
