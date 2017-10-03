const expect = chai.expect;

describe('drivers', () => {
  it('defines a `driver` driver', () => {
    expect(typeof driver).to.equal('object');
  });

  describe('updatedriverWithKeyAndValue(driver, key, value)', () => {
    beforeEach(() => {
      for (const key in driver) {
        delete driver[key];
      }

      driver.name = 'Sam';
    });

    it('returns an driver with the orignal key value pairs and the new key value pair', () => {
      expect(updateDriverWithKeyAndValue(driver, 'address', '11 Broadway'),).to.eql({
        name: 'Sam',
        address: '11 Broadway',
      });
    });

    it('it does not modify the original driver, but rather returns a clone with the new data', () => {
      updateDriverWithKeyAndValue(driver, 'address', '11 Broadway');

      expect(driver.address).to.equal(undefined);
    });
  });

  describe('destructivelyUpdatedriverWithKeyAndValue(driver, key, value)', () => {
    it('updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver', () => {
      expect(destructivelyUpdateDriverWithKeyAndValue(
          driver,
          'address',
          '12 Broadway',
        ),).to.eql({
        name: 'Sam',
        address: '12 Broadway',
      });

      expect(driver).to.eql({
        name: 'Sam',
        address: '12 Broadway',
      });
    });
  });

  describe('deleteFromDriverByKey(driver, key)', () => {
    it('deletes `key` from a clone of driver and returns the new driver (it is non-destructive)', () => {
      const newdriver = deleteFromDriverByKey(driver, 'name');

      expect(newdriver.name).to.equal(undefined);
    });

    it('does not modify the original driver (it is non-destructive)', () => {
      deleteFromDriverByKey(driver, 'name');

      expect(driver.name).to.equal('Sam');
    });
  });

  describe('destructivelyDeleteFromdriverByKey(driver, key)', () => {
    it('returns driver without the delete key/value pair', () => {
      const newdriver = destructivelyDeleteFromDriverByKey(driver, 'name');

      expect(newdriver.name).to.equal(undefined);
    });

    it('modifies the original driver', () => {
      const newdriver = destructivelyDeleteFromDriverByKey(driver, 'name');

      expect(driver.name).to.equal(undefined);
    });
  });
});
