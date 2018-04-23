// Write your solution in this file!
const driver = {
  breakfast: 'Oatmeal',
  lunch: 'Caesar salad',
  dinner: 'Chimichangas'
};


function updateDriverWithKeyAndValue(obj, key, value){
  const newObj = { ...obj };

  newObj[key] = value;

  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;

  return driver
}

function deleteFromDriverByKey(obj, key){
  const newObj = { ...obj };

  delete newObj[key];

  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];

  return driver;
}
