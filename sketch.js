
var box1, box2, box3, box4;

function setup() {
  createCanvas(600, 400);
  box1 = new Box()
  box2 = new Box()
  box3 = new Box()
  box4 = new Box()

}

function draw() {
  background(220);

  box1.setwidth(140);
  box2.setwidth(120);
  box3.setwidth(100);
  box4.setwidth(80);




  box1.show()
  box2.show()
  box3.show()
  box4.show()




}

