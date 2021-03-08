// Write your solution in this file!
const driver = {}

const updateDriverWithKeyAndValue = (obj, key, value) => {
    return {...obj, [key]: value }
}

const destructivelyUpdateDriverWithKeyAndValue = (obj, key, value) => {
    obj[key] = value
    return obj
}

const deleteFromDriverByKey = (obj, key) => {
    let newObj = Object.assign({}, obj)
    delete newObj[key]
    return newObj
}

const destructivelyDeleteFromDriverByKey = (obj, key) => {
    delete obj[key]
    return obj
}