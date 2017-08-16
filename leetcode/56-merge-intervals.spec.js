const { Interval, merge } = require('./56-merge-intervals');

describe('Merge Intervals', () => {

  it('returns correct result when only one interval given', () => {
    const input = [new Interval(1, 3)];
    const output = merge(input);
    expect(output).toBe(input);
  });

  it('can merge overlapping intervals', () => {
    const input = [
      new Interval(1, 6),
      new Interval(8, 10),
      new Interval(2, 8),
      new Interval(15, 18),
      new Interval(8, 9),
    ];
    const output = merge(input);
    expect(output.length).toBe(2);
    expect(output[0].start).toBe(1);
    expect(output[0].end).toBe(10);
    expect(output[1].start).toBe(15);
    expect(output[1].end).toBe(18);
  });

});