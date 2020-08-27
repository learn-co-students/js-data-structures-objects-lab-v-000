// Write your solution in this file!
const driver = {};

    function updateDriverWithKeyAndValue(obj, key, value) {
      //return Object.assign({}, obj, { [key]: value });
      return {...obj, [key]: value } //same as above
    }

    function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
      obj[key] = value;
      return obj;
    }

    function deleteFromDriverByKey(driver, key) {
      // let newDriver = Object.assign({}, driver);
      let newDriver = {...driver} //same as above
      delete newDriver[key]
      return newDriver
    }

    function destructivelyDeleteFromDriverByKey(driver, key) {
      delete driver[key]
      return driver
    }
