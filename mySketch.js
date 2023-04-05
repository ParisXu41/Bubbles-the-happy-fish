// Paris Xu 
// Pascal Huynh 
// Web and FX: From Theory to Practice section 02 
//  Bubbles the happy fish
//https://openprocessing.org/sketch/1882393
/* (Instruction) 
When you click on Bubbles he becomes yellow
When Bubbles leaves the screen you can press space bar so he comes back from the left
/
/* (Analysis/artist statement) Bubbles is a happy little orange fish living in the ocean filled with bubbles.
He spends his time swimming around looking for something to eat. If you want, you can give bubbles a little 
treat just by clicking on him. Watch Bubbles as he glows brightly like the sun! Little Bubbles is a fast swimmer, but don't worry!
You can always press space bar to bring him back.*/

let x;
let circles = [];
let isShapeClicked = false;

//randomly generated bubbles
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(1, 111, 185);
  x = 0;
	
  // generate 10 bubbles with random positions and sizes
  for (let i = 0; i < 10; i++) {
    let circleX = random(width);
    let circleY = random(height);
    let circleSize = random(20, 50);
    circles.push({ x: circleX, y: circleY, size: circleSize });
  }
}

//the bubbles
function draw() {
  background(1, 111, 185);
  for (let i = 0; i < circles.length; i++) {
    noFill(); // draw hallow circles
    stroke(87, 196, 235); // set the stroke color to light blue
    let circleX = circles[i].x;
    let circleY = circles[i].y;
    let circleSize = circles[i].size;
    ellipse(circleX, circleY, circleSize, circleSize);
  }
	
	//text
	fill(17, 29, 74);
noStroke();
text("Click on Bubbles to feed him some food. It makes him happy", 200, 200);
textSize(30);

fill(17, 29, 74);
noStroke();
text("If Bubbles disappear try pressing space bar, maybe he'll come back", 300, 240);
textSize(30);

  // fish food that follows the mouse
  noStroke();
  fill(153, 102, 51);
  ellipse(mouseX, mouseY, 20, 20);
	
	//the fish
  //the circle
  noStroke();
  if (isShapeClicked) {
    fill(255, 255, 0);
  } else {
    fill(244, 134, 104);
  }
  ellipse(x, 300, 100);

  //the triangle
  let tx = x - 50;
  let ty = 300;
  if (isShapeClicked) {
    fill(255, 255, 0);
  } else {
    fill(244, 134, 104);
  }
  triangle(tx, ty, tx - 50, ty + 50, tx - 50, ty - 50);

  //the eye
  fill(0);
  let eyeSize = 20;
  let eyeX = x + 30;
  ellipse(eyeX, 300, eyeSize, eyeSize);

  x = x + 5;
}

//When the fish is clicked, it becomes yellow
function mouseClicked() {
  let circleDist = dist(mouseX, mouseY, x, 300);
  if (circleDist <= 50) {
    isShapeClicked = !isShapeClicked; 
  }

  let tx = x - 50;
  let ty = 300;
  let triangleDist = dist(mouseX, mouseY, tx - 50, ty + 50);
  if (triangleDist <= 50) {
    isShapeClicked = !isShapeClicked; 
  }
}

// when the spacebar is pressed the fish comes back from the left
function keyTyped() {
  if (key === ' ') {
    x = -100; 
  }
}
