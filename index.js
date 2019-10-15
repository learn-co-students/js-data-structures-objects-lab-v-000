const driver = {};

const updateDriverWithKeyAndValue = (driver, key, value) => {
	//This function should not mutate the`driver` and should return a _new_ `driver` that has an updated `value` for the `key` passed in.
	return Object.assign({}, driver, {[key]: value});
};

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
	driver[key] = value;
	return driver;
};

const deleteFromDriverByKey = (driver, key) => {
	//It should delete the `key`/`value` pair for the `key` that was passed in from the `driver` `Object`. This should all not actually mutate the `driver` passed in.
	let newDriver = Object.assign('{}, driver');
	delete newDriver[key];
	return newDriver;
};

const destructivelyDeleteFromDriverByKey = (driver, key) => {
	//this function should work the same as `deleteFromDriverByKey()` but it _should_ mutate the `driver` passed in. Be sure and consider whether dot-notation or bracket-notation might affect your solution.
	delete driver[key];
	return driver;
};
