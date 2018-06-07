// Write your solution in this file!
let driver = {driver: "Ted"};




function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}


function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, { [key]: value});
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}

function deleteFromDriverByKey(driver, key){
  const driver3 = Object.assign({}, driver );
  delete driver3[key];
  return driver3;
}
