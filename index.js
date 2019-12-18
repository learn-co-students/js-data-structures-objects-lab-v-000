// Write your solution in this file!

// To start, define a driver variable and assign it to an Object
const driver = {};

// this function should take in three arguments:
// a driver Object, a key and a value. This function should not mutate the
// driver and should return a new driver that has an updated value for the
// key passed in.
const updateDriverWithKeyAndValue = (driver, myKey, myValue) => {
    return { ...driver, ...{[myKey]: myValue}};
}

// this function should work the same as updateDriverWithKeyAndValue() [above]
// but it should mutate the driver parameter passed in.
const destructivelyUpdateDriverWithKeyAndValue = (nuDriver, anotherKey, anotherValue) => {
    nuDriver[anotherKey] = anotherValue;
    return nuDriver;
}

// this function should take in a driver Object and a key. It should delete the
// key/value pair for the key that was passed in from the driver Object.
// This should all not actually mutate the driver passed in.
const deleteFromDriverByKey = (existingDriver, someKey) => {
    const myNewDriver = {... existingDriver};
    delete myNewDriver[someKey];
    return myNewDriver;
}

// this function should work the same as deleteFromDriverByKey() but it should
// mutate the driver passed in. Be sure and consider whether dot-notation or
// bracket-notation might affect your solution.
const destructivelyDeleteFromDriverByKey = (finalDriver, lastKey) => {
    delete finalDriver[lastKey];
    return finalDriver;
}
