let persons = [];

function setup() {
  createCanvas(500, 500);
}

function mousePressed() {
  const person = new Person(mouseX, mouseY);
  persons.push(person);
  // prevent default
  return false;
}

function draw() {
  background(0);

  for (person of persons) {
    person.render();
  }
}
