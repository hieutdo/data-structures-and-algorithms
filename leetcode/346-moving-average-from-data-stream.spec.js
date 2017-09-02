const MovingAverage = require('./346-moving-average-from-data-stream');

describe('Moving Average from Data Stream', () => {
  describe('when window size == 1', () => {
    it('returns the input number as is', () => {
      const size = 1;
      const m = new MovingAverage(size);
      expect(m.next(1)).toBe(1);
      expect(m.next(2)).toBe(2);
      expect(m.next(10)).toBe(10);
    });
  });

  describe('when window size > 1', () => {
    it('returns the average of available numbers in the storage', () => {
      const size = 3;
      const m = new MovingAverage(size);
      expect(m.next(1)).toBe(1);
      expect(m.next(10)).toBe(11 / 2);
      expect(m.next(3)).toBe(14 / 3);
      expect(m.next(5)).toBe(18 / 3);
    });
  });
});
