let canvasHeight;

function setup() {
  var canvasDiv = document.getElementById('background');
  var divWidth = canvasDiv.offsetWidth;
  var divHeight = canvasDiv.offsetHeight;
  var myCanvas = createCanvas(divWidth,divHeight);
  myCanvas.parent("background");
  canvasHeight = divHeight;
}

function windowResized() {
  var canvasDiv = document.getElementById('background');
  var divWidth = canvasDiv.offsetWidth;
  var divHeight = canvasDiv.offsetHeight;
  resizeCanvas(divWidth,divHeight);
  canvasHeight = divHeight;
}

function draw() {
  windowResized();
  background(51);

  fill(75,75,75,255);
  stroke(75);
  beginShape();
  vertex(0, canvasHeight);
  for (var x = 0; x < width; x++) {
	  var nx = map(x, 0, 1000, frameCount/200+10000, 10+frameCount/200+10000);
	  var y = (height/4 * noise(nx)) + height*3/4-90;
	  vertex(x, y);
  }
  vertex(windowWidth, canvasHeight);
  endShape();

  fill(51,51,51,51);
  noStroke();
  beginShape();
  vertex(0, canvasHeight);
  for (var x = 0; x < width; x++) {
	  var nx = map(x, 0, 1000, frameCount/150+1000.05, 10+frameCount/150+1000.05);
	  var y = (height/4 * noise(nx)) + height*3/4-55;
	  vertex(x, y);
  }
  vertex(windowWidth, canvasHeight);
  endShape();
  
  fill(187,187,187,255);
  stroke(187);
  beginShape();
  vertex(0, canvasHeight);
  for (var x = 0; x < width; x++) {
	  var nx = map(x, 0, 1000, frameCount/150+1000, 10+frameCount/150+1000);
	  var y = (height/4 * noise(nx)) + height*3/4-50;
	  vertex(x, y);
  }
  vertex(windowWidth, canvasHeight);
  endShape();
  
  fill(75,75,75,50);
  noStroke();
  beginShape();
  vertex(0, canvasHeight);
  for (var x = 0; x < width; x++) {
	  var nx = map(x, 0, 1000, frameCount/100+0.05, 10+frameCount/100+0.05);
	  var y = (height/4 * noise(nx)) + height*3/4-5;
	  vertex(x, y);
  }
  vertex(windowWidth, canvasHeight);
  endShape();

  fill(255,255,255,255);
  stroke(255);
  beginShape();
  vertex(0, canvasHeight);
  for (var x = 0; x < width; x++) {
	  var nx = map(x, 0, 1000, frameCount/100, 10+frameCount/100);
	  var y = (height/4 * noise(nx)) + height*3/4;
	  vertex(x, y);
  }
  vertex(windowWidth, canvasHeight);
  endShape();
}