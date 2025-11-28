let glassesY;
let glassesSpeed;
let eyeHeight;
let eyeSpeed;

function setup() {
  createCanvas(600, 400);

  glassesY = 200;
  glassesSpeed = 0.5;
  eyeHeight = 28;
  eyeSpeed = -0.5;
}

function draw() {
  background(240, 230, 220);

  stroke(40);
  strokeWeight(2);
  fill('#6666FF');
  ellipse(300, 410, 500, 140);

  stroke(40);
  strokeWeight(2);
  fill('#FFE5CC');
  arc(300, 340, 85, 60, HALF_PI, PI);
  arc(300, 340, 85, 60, 0, HALF_PI);

  noStroke();
  fill('#FFE5CC');
  rect(270, 310, 60, 30);

  stroke(50);
  strokeWeight(2);
  fill('#FFE5CC');
  ellipse(300, 200, 200, 230);

  noStroke();
  fill(20);
  arc(242, 165, 80, 160, PI, TWO_PI);
  arc(358, 165, 80, 160, PI, TWO_PI);
  arc(300, 130, 180, 120, PI, TWO_PI);

  noStroke();
  fill('#FFCCCC');
  ellipse(250, 240, 60, 20);
  ellipse(350, 240, 60, 20);

  stroke(0);
  strokeWeight(2);
  line(300, 200, 310, 240);
  line(310, 240, 300, 235);

  stroke(0);
  strokeWeight(2);
  line(290, 265, 310, 265);
  fill('#FFC0C0');
  arc(300, 265, 20, 40, 0, PI);

  //  마우스 인터렉션 
  if (mouseIsPressed) {
    // 마우스 누르고 있을 때 
    glassesY += glassesSpeed;

    if (glassesY < 185) {
      glassesSpeed *= -1;
    }
    if (glassesY > 200) {
      glassesSpeed *= -1;
    }

    // 팔과 손 
    stroke('#6666FF');
    strokeWeight(50);
    line(520, 410, 400, glassesY + 20);
    noStroke();
    fill('#FFE5CC');
    ellipse(400, glassesY + 20, 55, 55);

    stroke(0);
    strokeWeight(4);
    noFill();
    ellipse(250, glassesY, 80, 80);
    ellipse(350, glassesY, 80, 80);
    line(290, glassesY, 310, glassesY);
  } else {
    //  마우스 누르고 있지 않을 때 
    glassesY = 200;

    stroke(0);
    strokeWeight(4);
    noFill();
    ellipse(250, 200, 80, 80);
    ellipse(350, 200, 80, 80);
    line(290, 200, 310, 200);
  }

  // E키 인터렉션
  if (keyIsPressed && (key === 'e')) { 

    eyeHeight += eyeSpeed;

    if (eyeHeight < 2) {
      eyeSpeed *= -1;
    }
    if (eyeHeight > 28) {
      eyeSpeed *= -1;
    }

    noStroke();
    fill(255);
    ellipse(250, 200, 28, eyeHeight);
    ellipse(350, 200, 28, eyeHeight);
    

    let eyeHeight2;
    let eyeHeight3;

    if (eyeHeight > 15) {
      eyeHeight2 = 15; 
    } else {
      eyeHeight2 = eyeHeight; 
    }

    if (eyeHeight > 6) { 
      eyeHeight3 = 6;
    } else {
      eyeHeight3 = eyeHeight;
    }

  
    fill(10);
    ellipse(250, 200, 15, eyeHeight2);
    fill(255);
    ellipse(255, 197, 6, eyeHeight3);
    
    fill(10);
    ellipse(350, 200, 15, eyeHeight2);
    fill(255);
    ellipse(355, 197, 6, eyeHeight3);

  } else {
    eyeHeight = 28;

    noStroke();
    fill(255);
    ellipse(250, 200, 28, 28);
    ellipse(350, 200, 28, 28);
    
    fill(10);
    ellipse(250, 200, 15, 15);
    fill(255);
    ellipse(255, 197, 6, 6);
    
    fill(10);
    ellipse(350, 200, 15, 15);
    fill(255);
    ellipse(355, 197, 6, 6);
  }


  fill(20);
  arc(250, 185, 50, 20, PI, TWO_PI);
  arc(350, 185, 50, 20, PI, TWO_PI);

  stroke(80, 60, 60);
  strokeWeight(2);
  noFill();
  arc(250, 198, 28, 20, PI + 0.2, TWO_PI - 0.2);
  arc(350, 198, 28, 20, PI + 0.2, TWO_PI - 0.2);
  
  // T 인터렉션 
  if (keyIsPressed && (key === 't')) {
    stroke('#FFFF33');
    strokeWeight(10);
    noFill();
    ellipse(300,50,200,30)
  }
}

function keyPressed() {
  if (key === 'r') {
    saveGif('20232552_임채서_과제#3', 10);
  } 
}