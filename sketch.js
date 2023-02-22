var bg,bg2,form,system,code,security;
var score=0;
let eyeSize = 40;
let pupilSize = 10;
let pupilPosition = { x: 0, y: 0 };

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
  miGIF = createImg('miku.gif'); //añadiendo toque personal
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  miGIF.position(windowWidth-300, windowHeight-300); 

  system = new System()
  security = new Security()
}

function draw() {
  createCanvas(windowWidth,windowHeight);//adaptando canvas
  miGIF.position(windowWidth-300, windowHeight-300);

  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Puntuación: " + score, 450, 50);
  
  // Calcular la posición de la pupila
  let eyeCenter = { x: width / 2, y: height / 2 };
  let angle = atan2(mouseY - eyeCenter.y, mouseX - eyeCenter.x);

  pupilPosition.x = eyeCenter.x + cos(angle) * (eyeSize / 4);
  pupilPosition.y = eyeCenter.y + sin(angle) * (eyeSize / 4);
    
  // Dibujar el ojo
  fill(255);
  ellipse(eyeCenter.x+240, eyeCenter.y-305, eyeSize);
  
  // Dibujar la pupila
  fill(0);
  ellipse(pupilPosition.x+240, pupilPosition.y-305, pupilSize);

  if(score === 3) {
    miGIF.remove();
    clear();
    background(bg2);
    fill("black");
    textSize(40);
    text("TESORO DESBLOQUEADO",250, 200);
  }

  drawSprites()
}