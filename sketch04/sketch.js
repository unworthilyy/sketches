function setup() {
  createCanvas(windowWidth, windowHeight);
  // noLoop();
}

function draw() {
  background(220);
  const l = map(mouseX, 0, width, 1, 100)
  for (let x = 0; x < width; x += 10) {
    for (let y = 0; y < height; y += 10) {
      push();
      // let r = random(0, 1);
      let s = 0.01;
      let r = noise(x * s, y * s);
      let angle = map(r, 0, 1, 0, TWO_PI);

      translate(x, y);
      rotate(angle);

      stroke(0, 0, 0, 100);
      line(0, 0, 0, l);
      // stroke(c);
      // point(x, y);

      pop();
    }
  }
}
