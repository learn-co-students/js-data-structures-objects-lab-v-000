// Write your solution in this file!
// Write your solution in this file!
const driver = {}
driver['name'] = 'Sam';


function updateDriverWithKeyAndValue(driver, key, value) {
    const newdriver = {...driver};
    newdriver.address = '11 Broadway';
    return newdriver;
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver.address = '12 Broadway';
    return driver;
}  
function deleteFromDriverByKey(driver, key) {
    const newdriver = Object.assign({}, driver);
    delete newdriver.name;
    return newdriver;
}
function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver.name;
    return driver;
} 
 
