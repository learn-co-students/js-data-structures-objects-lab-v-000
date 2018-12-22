// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(obj, key, value){
  let x = {}
  Object.assign(x, obj, {[key]:value})
  return x
}

function destructivelyUpdateDriverWithKeyAndValue(obj,key,value){
  obj[key]=value
  return obj
}

function deleteFromDriverByKey(obj, key){
  let x = {}
  Object.assign(x,obj)
  delete x[key]
  return x
}

function destructivelyDeleteFromDriverByKey(obj, key){
  delete obj[key]
  return obj
}
