class Number {
  constructor(array) {
    this.array = array;
  }
}

class Numbers {
  constructor() {
    this.Numbers = [];
  }
}

const arrayNumbers = [
  new Number("1"),
  new Number("2"),
  new Number("3"),
  new Number("4"),
  new Number("5"),
];

function arrayRemoval(array) {
  for (let i = array.length; i--; ) {
    if (i % 2 === 0) {
      const shiftArray = array.shift();
      console.log(shiftArray);
    } else if (i % 2 != 0) {
      const popArray = array.pop();
      console.log(popArray);
    }
  }
}

console.log(arrayRemoval(arrayNumbers));
