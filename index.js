// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
}

// def update_driver_with_key_and_value(driver, key, value)
//   new_obj = {"#{key}": value}
//   driver.merge(new_obj)
// end

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
  // return Object.assign(driver, {[key]: value});
}

// def destructively_update_driver_with_key_and_value(driver, key, value)
//   driver["#{key}"] = value
//   driver
// end

function deleteFromDriverByKey(driver, key) {
  const clone = {...driver};
  delete clone[key];
  return clone;
}

// def delete_from_driver_by_key(driver, key)
//   copy = driver.clone
//   copy.delete(:"#{key}")
//   copy
// end

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}

// def destructively_delete_from_driver_by_key(driver, key)
//   driver.delete(key)
//   driver
// end
//
// destructively_delete_from_driver_by_key(driver, :address)
