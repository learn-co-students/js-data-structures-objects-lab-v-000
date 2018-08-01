// Write your solution in this file!


const driver = {}

function updateDriverWithKeyAndValue(object, key, value){
  const newObj = {...object};

  newObj[key] = value

  return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  obj[key] = value

  return obj
}

function deleteFromDriverByKey(obj, key, value){
  let object = {...obj}

  return delete object.key

  return object
}

function destructivelyDeleteFromDriverByKey(obj, key){
  delete obj[key]

  return obj

}
