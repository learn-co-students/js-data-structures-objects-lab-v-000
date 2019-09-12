// Write your solution in this file!
 let driver = { }

 function updateDriverWithKeyAndValue(obj, key, value) {
      // Note: different wasy to do it.
   // newObj = {...obj};
   // newObj[key] = value;
   const newObj = Object.assign({}, obj, {[key]: value});
   return newObj;
 }

 function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
   obj[key] = value;
   return obj;
 }

 function deleteFromDriverByKey(obj, key) {
   let newObj = Object.assign({}, obj);
   delete newObj[key]; // delete.newObj.key would not work...has something to do with key being a string
   return newObj;
 }

 function destructivelyDeleteFromDriverByKey(obj, key) {
   delete obj[key];
   return obj;
 }
