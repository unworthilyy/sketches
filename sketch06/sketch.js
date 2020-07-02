let points = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();

  for (let i = 0; i < 100; i++) {
    points.push({
    location: createVector(random(200, width - 200), random(200, height - 200))
    });
  }

  
}

function draw() {
  // background(220);
  for (let p of points) {
    const loc = p.location

    for (let p2 of points){
      if(p == p2){
        continue
      }

      stroke(0, 0, 0, 10);
      if(p.location.dist(p2.location) < 150){
        line(p.location.x, p.location.y, p2.location.x, p2.location.y)
      }
    }
  }
}

