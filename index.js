const driver = {}

const updateDriverWithKeyAndValue = (driver, key, value) => {
    return Object.assign({}, driver, {[key]: value})
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    driver[key] = value
    return driver
}

const deleteFromDriverByKey = (driver, key) => {
    return Object.assign({}, delete driver.key)
}

const destructivelyDeleteFromDriverByKey = (driver, key) => {
    delete driver[key]
    return driver
}



