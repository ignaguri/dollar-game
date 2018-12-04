class Person {
    constructor(x, y, value = 0, radius = 50) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.value = value;
    this.neighbours = [];
  }

  render() {
    noFill();
    stroke(255);
    strokeWeight(2);
    ellipse(this.x, this.y, this.radius);
  }
}
