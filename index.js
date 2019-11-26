// Write your solution in this file!
    
let driver = {};
        function updateDriverWithKeyAndValue(obj, key, value) {
          /* This function should not mutate the obj and
            should return a new obj that has an updated value for the key passed in.
       */
          let newObj = {...obj};
          newObj[key] = value;
          return newObj;
        }
        
        function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
            // same as above but destructive
            obj[key] = value;
            return obj;
        }

        function deleteFromDriverByKey(obj, key) {
            // delete the key value pair for the key
            // should not mutate the passed obj
            let newObj = {...obj};
             delete newObj[key];
             return newObj;
            
        }

        function destructivelyDeleteFromDriverByKey(obj, key) {
            // same as above but destructive
            delete obj[key];
            return obj;
        }
