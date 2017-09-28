// Write your solution in this file!
let  driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, driver, { [key]: value });
};

function destructivelyUpdateDriverWithKeyAndValue (obj, key, value) {
  obj[key] = value;

  return obj;
};

function deleteFromDriverByKey(obj, name) {
	let newObj = Object.assign({}, obj);

	delete newObj[name];

	return newObj;
};

function destructivelyDeleteFromDriverByKey(obj, key){
	delete obj[key];

	return obj;
}