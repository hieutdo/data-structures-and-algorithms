const minMeetingRooms = require('./253-meeting-rooms-ii');
const Interval = require('./Interval');

describe('Meeting Rooms II', () => {
  it('returns correct result', () => {
    expect(
      minMeetingRooms([
        new Interval(0, 30),
        new Interval(5, 10),
        new Interval(15, 20)
      ])
    ).toBe(2);
  });
});
