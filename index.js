// Write your solution in this file!

driver ={}

function updateDriverWithKeyAndValue(obj,key,value){
  // return Object.assign({},obj,{[key]:value});
  return { ...driver, ...{ [key]: value } }
}

function destructivelyUpdateDriverWithKeyAndValue(obj,key,value){
  return Object.assign(obj,{[key]:value});
}

function deleteFromDriverByKey(obj,key){
  newDriver =  Object.assign({},obj);
   delete newDriver[key];
   return newDriver;
}

function destructivelyDeleteFromDriverByKey(obj,key){
  delete obj[key];
  return obj;
}
