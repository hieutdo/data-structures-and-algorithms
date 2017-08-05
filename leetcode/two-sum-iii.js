class TwoSum {
  constructor() {
    this.map = new Map();
  }

  add(input) {
    this.map.set(input, (this.map.get(input) || 0) + 1);
  }

  find(value) {
    for (const [num, count] of this.map.entries()) {
      const complement = value - num;
      if (complement === num) {
        if (count >= 2) {
          return true;
        }
      } else if (this.map.has(complement)) {
        return true;
      }
    }
    return false;
  }
}

const twoSum = new TwoSum();
twoSum.add(1);
twoSum.add(2);
twoSum.add(2);
twoSum.add(5);
console.log(twoSum.find(4));
console.log(twoSum.find(7));
console.log(twoSum.find(8));