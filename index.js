// Write your solution in this file!


const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
      return Object.assign({}, obj, {[key]:value})
}
      //returns an driver with the orignal key value pairs and the new key value pair ‣
      //it does not modify the original driver, but rather returns a clone with the new data

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
      //return Object.assign(obj, {[key]:value})
      //or
      obj[key]=value
      return obj
}
      //updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver

function deleteFromDriverByKey(obj, key) {
      const newObj= {...obj}
      delete newObj[key]
      return newObj
      //or

      //const newObj=Object.assign({}, obj)
      //delete newObj[key]
      //return newObj
}
      //deletes `key` from a clone of driver and returns the new driver (it is non-destructive) ‣
      //does not modify the original driver (it is non-destructive)

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key]
    return obj
}
    //returns driver without the delete key/value pair ‣
    //modifies the original driver
