// Write your solution in this file!
<<<<<<< HEAD
'use strict'
var driver = { };
function updateDriverWithKeyAndValue(driver, key, value){
  let new_object = Object.assign({}, driver)
  new_object[key] = value
  return new_object
}

function destructivelyUpdateDriverWithKeyAndValue(driver_obj, key, value){
    driver = updateDriverWithKeyAndValue(driver_obj, key, value)
    return driver
}

function deleteFromDriverByKey(driver_obj, key){
    let new_object = Object.assign({}, driver_obj)
    delete new_object[key]
    return new_object
}
function destructivelyDeleteFromDriverByKey(driver_obj, key){
  driver = deleteFromDriverByKey(driver_obj, key)
  return driver
=======
var driver = {}
function updateDriverWithKeyAndValue(driver, key, value){

}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){

}
function deleteFromDriverByKey(driver, key){

}
function destructivelyDeleteFromDriverByKey(driver, key){

}
