// Write your solution in this f
driver= {}

function updateDriverWithKeyAndValue(obj, key, value) {
   const newdriver = {...obj}
   newdriver[key] = value;
   return newdriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
   return obj;
}

function deleteFromDriverByKey(obj, key){
  const newObj = Object.assign({},driver)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromDriverByKey(obj, key){
  delete obj[key]
  return obj
}
