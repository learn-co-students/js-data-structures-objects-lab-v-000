// Write your solution in this file!
const driver={
  name: 'Sam'
}

function updateDriverWithKeyAndValue(driver,key,value){
  const newDriver={...driver};
  return newDriver[key]=value
}
