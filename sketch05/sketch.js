let points = [];
let field = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // noLoop();

  for (let i = 0; i < 2000; i++) {
    let v = createVector(random(100, width - 100), random(100, height - 100));
    points.push({
      location: v,
      velocity: createVector(0, 0),
      acceleration: createVector(0, 0),
    });
  }

  initField(0.01)
}

function draw() {
  // background(220);
  const l = map(mouseX, 0, width, 1, 100);
  // for (let x = 0; x < width; x += 10) {
  //   for (let y = 0; y < height; y += 10) {
  //     push();
  //     // let r = random(0, 1);
  //     let s = 0.01;
  //     let r = noise(x * s, y * s);
  //     let angle = map(r, 0, 1, 0, TWO_PI);

  //     translate(x, y);
  //     rotate(angle);

  //     stroke(0, 0, 0, 100);
  //     line(0, 0, 0, l);
  //     // stroke(c);
  //     // point(x, y);

  //     pop();
  //   }
  // }

  for (let p of points) {
    const loc = p.location
    const f = field[int(loc.x)][int(loc.y)];
    // const f = field[0][5]
    
    p.acceleration.add(f)
    p.acceleration.limit(0.1)
    p.velocity.add(p.acceleration)
    p.velocity.mult(0.98)
    
    loc.add(p.velocity);
    p.acceleration.mult(0)

    if (loc.x < 0) {
      loc.x = width - 1;
    }
    if (loc.x > width - 1) {
      loc.x = 0;
    }
    if (loc.y < 0) {
      loc.y = height - 1;
    }
    if (loc.y > height - 1) {
      loc.y = 0;
    }

    push();
    translate(loc.x, loc.y);
    strokeWeight(2)
    stroke(0, 0, 0, 15);
    point(0, 0);
    pop();
  }
}

function mousePressed(){
  let s = map(mouseX, 0, width, 0.01, 0.1)
  initField(s)
}

function initField(s) {
  for (let x = 0; x < width; x += 1) {
    field.push([]);

    for (let y = 0; y < height; y += 1) {
      let r = noise(x * s, y * s);
      let angle = map(r, 0, 1, 0, TWO_PI);

      let v = p5.Vector.fromAngle(angle);
      field[x][y] = v;
    }
  }
}
