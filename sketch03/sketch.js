let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

// function draw() {
//   // background(220);
//   if (mouseIsPressed) {
//     let d = dist(mouseX, mouseY, pmouseX, pmouseY);
//     let m = map(d, 0, 150, 1, 4);
//     strokeWeight(m);
//     line(mouseX, mouseY, pmouseX, pmouseY);
//   }
// }

function draw() {
//   points.push(createVector(mouseX, mouseY));
  background(220);
  strokeWeight(1);
  //   if (points.length == 0) {
  //     return;
  //   }
  //   if (points.length == 1) {
  //       strokeWeight (5)
  //     point (points[0].x, points[0].y)
  //     return;
  //   }
  if (points.length > 1) {
    line(points[0].x, points[0].y, points[1].x, points[1].y);
    //   return;
  }
  if (points.length < 3) {
    return;
  }

  for (let i = 2; i < points.length; i += 1) {
    let p1 = points[i - 2];
    let p2 = points[i - 1];
    let p3 = points[i];
    let c1 = getcenter(p2, p1).mult(-1).add(p2);
    let c2 = getcenter(p2, p3).add(p2);
    // strokeWeight(5);
    // fill(0);
    // point(p1.x, p1.y);
    // text("p1", p1.x, p1.y);
    // point(p2.x, p2.y);
    // text("p2", p2.x, p2.y);
    // point(p3.x, p3.y);
    // text("p3", p3.x, p3.y);
    // point(c1.x, c1.y);
    // text("c1", c1.x, c1.y);
    // point(c2.x, c2.y);
    // text("c2", c2.x, c2.y);
    noFill();
    strokeWeight(1);
    bezier(p2.x, p2.y, c1.x, c1.y, c2.x, c2.y, p3.x, p3.y);
  }
}

function mousePressed() {
  //linestart = createVector(mouseX, mouseY);
  points.push(createVector(mouseX, mouseY));
}

function getcenter(v1, v2) {
  let center = p5.Vector.sub(v2, v1);
  center.mult(0.5);
  // center.add(v1);
  return center;
}
