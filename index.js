const driver = {}

function updateDriverWithKeyAndValue(obj, key, val) {
  const newObj = {...obj}
  Object.assign(newObj, {[key]: val})
  return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, val) {
  obj[key] = val
  return obj
}

function deleteFromDriverByKey(obj, key) {
  newObj = {...obj}
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key]
  return obj
}
