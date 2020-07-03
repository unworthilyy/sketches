
const x = mouseX
const y = mouseY 
function setup() {
  createCanvas(windowWidth, windowHeight);
   //noLoop();

  
}

function draw() {
  // background(220);
  for (let i=0; i < width; i+=10){
    for (let j=0; j < height; j+=10){
    const dx = mouseX - i
    const dy = mouseY - j
    if (dx < 200 && dy < 200){
     circle (i, j, 5)
    } else {
      circle (i, j, 10)
    }
}
}

  
  
}
