let driver = {name: "Sam"}


function updateDriverWithKeyAndValue(driver, key, value){
 return new_driver=Object.assign({}, driver, {[key]: value});
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
 return Object.assign(driver, {[key]: value});
}

function deleteFromDriverByKey(driver, key){
 new_driver=Object.assign({}, driver);
 delete new_driver[key];
 return new_driver
}


function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}