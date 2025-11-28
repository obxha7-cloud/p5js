function setup() {
  createCanvas(600, 400);

}

function draw() {
  background(0); 

  // 1. 선 위치 변화(회전)
  push(); 
  
  translate(300, 200); 
  rotate(radians(-frameCount)); 
  translate(-300, -200); //

  strokeWeight(1);
  stroke(255);
  line(275, 200, 100, 0);
  line(300, 175, 500, 0);
  line(325, 200, 500, 400);
  line(300, 225, 100, 400); // 4개 얇은 선

  stroke('#FFFFC0');
  strokeWeight(4);
  line(280, 205, 300, 0);
  line(320, 185, 500, 200);
  line(320, 215, 300, 400);
  line(280, 215, 100, 200); // 4개 굵은 선 

  stroke(255);
  strokeWeight(1);
  line(275, 200, 200, 0);
  line(275, 200, 400, 0);
  line(300, 175, 500, 100);
  line(320, 188, 500, 300);
  line(325, 200, 400, 400);
  line(320, 215, 200, 400);
  line(300, 225, 100, 300);
  line(280, 215, 100, 100); // 추가적인 8개의 선 
  
  pop(); 



  // 2. 도형 색상 변화
  push();
  noStroke();
  

  colorMode(HSB, 360, 100, 100); 
  

  let shift = frameCount % 360; 

  fill((280 + shift) % 360, 100, 100); 
  arc(180, 100, 150, 150, radians(220), radians(280));
  
  fill((240 + shift) % 360, 100, 100);
  arc(190, 200, 140, 140, radians(200), radians(250));
  
  fill((240 + shift) % 360, 100, 100);
  arc(200, 300, 140, 140, radians(180), radians(230));
  
  fill((180 + shift) % 360, 100, 100);
  arc(270, 350, 130, 130, radians(140), radians(180));
  
  fill((120 + shift) % 360, 100, 100);
  arc(350, 320, 120, 120, radians(110), radians(150));
  
  fill((150 + shift) % 360, 100, 100);
  arc(400, 250, 110, 110, radians(90), radians(130));
  
  fill((60 + shift) % 360, 100, 100);
  arc(380, 180, 90, 90, radians(70), radians(110));
  
  fill((30 + shift) % 360, 100, 100);
  arc(320, 130, 90, 90, radians(40), radians(70));
  
  fill((0 + shift) % 360, 100, 100);
  arc(260, 150, 70, 70, radians(320), radians(350));
  
  fill((0 + shift) % 360, 100, 100);
  arc(240, 190, 50, 50, radians(280), radians(300));
  
  pop(); 



  // 3. 크기 변화

  let centerSize = map(sin(frameCount * 0.05), -1, 1, 50, 100);
  
  noStroke()
  fill(255);
  ellipse(300, 200, centerSize); 


  let cornerSize = max(0, 200 - (frameCount * 0.2)); 

  fill('#400000');
  stroke('#FF0000');
  strokeWeight(10);

  arc(500, 0, cornerSize, cornerSize, radians(90), radians(180)); 
}

function keyPressed() {
  if (key === 's') {
    saveGif('20232552_임채서_과제#4', 10);
  } 
}