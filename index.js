const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  let newDriver = {...driver};
  return newDriver[key] = value;
}