// Write your solution in this file!
const driver = {

};


function updateDriverWithKeyAndValue(driver,key,value) {

  const newObj = {...driver}; //copy old object properties into new object

  newObj[key] = value; //update new object with proposed change

  return newObj;

}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value) {

  driver[key] = value;

  return driver;

}

function deleteFromDriverByKey(driver,key) {

  const newObj = {...driver}; //copy old object properties into new object

  delete newObj[key]; //update new object with proposed change

  return newObj;

}

function destructivelyDeleteFromDriverByKey(driver,key) {

  delete driver[key];

  return driver;

}
