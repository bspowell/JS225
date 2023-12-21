class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.length * this.width
  }

}

class Square extends Rectangle {
  constructor(lengthOfSide) {
    super(lengthOfSide, lengthOfSide)
  }
}