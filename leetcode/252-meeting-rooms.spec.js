const { Interval, canAttendMeetings } = require('./252-meeting-rooms');

describe('canAttendMeetings', () => {

  it('returns false when having overlap between meetings', () => {
    const intervals = [
      new Interval(30, 31),
      new Interval(0, 30),
      new Interval(29, 31),
      new Interval(0, 20),
    ];
    expect(canAttendMeetings(intervals)).toBe(false);
  });

  it('returns true when no meetings are overlap', () => {
    const intervals = [
      new Interval(30, 35),
      new Interval(0, 30),
      new Interval(35, 40),
    ];
    expect(canAttendMeetings(intervals)).toBe(true);
  });

});