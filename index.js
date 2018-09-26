// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(obj, key, value)
{
  const newDriver = {...obj};
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value)
{
  obj[key] = value
  return driver
}

function deleteFromDriverByKey(obj, key, value)
{
  const newDriver = {...obj};
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey (obj, key)
{
  delete driver[key];
  return driver;
}
