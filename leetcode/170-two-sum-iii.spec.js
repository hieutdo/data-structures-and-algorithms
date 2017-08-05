const TwoSum = require('./170-two-sum-iii');

describe('Two Sum III - Data structure design', () => {
  let twoSum;

  describe('find', () => {

    beforeEach(() => {
      twoSum = new TwoSum();
    })

    it('returns true when found a sum pair', () => {
      twoSum.add(1);
      twoSum.add(3);
      expect(twoSum.find(4)).toBe(true);
    });

    it('returns true when found multiple sum pairs', () => {
      twoSum.add(1);
      twoSum.add(3);
      twoSum.add(5);
      expect(twoSum.find(4)).toBe(true);
      expect(twoSum.find(6)).toBe(true);
      expect(twoSum.find(8)).toBe(true);
    });

    it('returns true when found a duplicate sum pair', () => {
      twoSum.add(2);
      twoSum.add(2);
      twoSum.add(3);
      expect(twoSum.find(4)).toBe(true);
      expect(twoSum.find(5)).toBe(true);
    });

    it('returns false when no sum pair found', () => {
      twoSum.add(2);
      twoSum.add(3);
      expect(twoSum.find(4)).toBe(false);
    });

    it('returns false when it contains zero number', () => {
      expect(twoSum.find(4)).toBe(false);
    });

    it('returns false when it contains only one number', () => {
      twoSum.add(4);
      expect(twoSum.find(4)).toBe(false);
    });

  });

});