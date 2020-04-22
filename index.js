// Write your solution in this file!

const driver = {} //needed because test said driver wasn't defined. John Chriest

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = { ...driver};
  //set newDriver to driver from parameters
  newDriver[key] = value;
  //makes a hash by assigning value to key attribute
  return newDriver;
 // Code to return new, updated menu driver
}

/* or...

function nondestructivelyUpdateObject(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

//Object.assign(initialObject, additionalObject, additionalObject, ...); 
assign is good for multiple properties.
Object.assign({ eggs: 3 }, { flour: '1 cup' });

*/

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  //this is hash. The driver object is updating it's properties with a key and value.
  return driver;
  //Note that modifying an Object's properties in the way we did above is destructive. This means that we're making changes directly to the original Object.
}


const Driver = {}

function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver); 
  //console.log(newDriver) CONSOLE LOG IS THE NEW PRY
  //I don't believe we have a Driver object such as a ruby class... we have a js object of driver that we are assigning - Charlotte Neff
  //set to a variable to keep from destroying destructively
  //console.log(newDriver.keys(key));
  //console.log(newDriver[key]);
  delete newDriver[key];
  //returns driver
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  //console.log(driver.keys(key));
  delete driver[key];
  //destroys directly, so destructively.
  return driver;
  //return driver
}