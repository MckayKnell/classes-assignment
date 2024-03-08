class NumClass {
  constructor(array) {
    this.array = array;
  }
  arrayRemoval() {
    for (let i = this.array.length; i--; ) {
      if (i % 2 === 0) {
        const shiftArray = this.array.shift();
        console.log(shiftArray);
      } else if (i % 2 != 0) {
        const popArray = this.array.pop();
        console.log(popArray);
      }
    }
  }
}

const arrayNumbers = [1, 2, 3, 4, 5];

const firstArr = new NumClass(arrayNumbers);
firstArr.arrayRemoval(arrayNumbers);
