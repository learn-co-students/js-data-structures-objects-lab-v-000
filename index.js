// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue (driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

// function updateDriverWithKeyAndValue (driver, key, value) {
//   const newObj = { ...driver }
//   newObj[key] = value  
//   return newObj
// }

// // // console.log(updateDriverWithKeyAndValue(driver, 'address', '11 Broadway'))

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value; 
  return obj;
}

// function deleteFromDriverByKey(driver, key) {
//   const newObj = { ...driver }
//   delete newObj.key
//   return newObj
// }

function deleteFromDriverByKey (driver, key) {
  const newObj = Object.assign({}, driver);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}