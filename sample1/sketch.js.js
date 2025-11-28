function setup() {
  createCanvas(600, 400);
  background(0);
  ellipse(300,200,50); 
}

function draw() { 
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
  line(280, 215, 100, 200);  // 4개 굵은 선 
  
  stroke(255);
  strokeWeight(1);
  line(275, 200, 200, 0);
  line(275, 200, 400, 0);
  line(300, 175, 500, 100);
  line(320, 188, 500, 300);
  line(325, 200, 400, 400);
  line(320, 215, 200, 400);
  line(300, 225, 100, 300);
  line(280, 215, 100, 100); // 추가적으로 8개의 선 
  
  noStroke()
  fill('#800080');
  arc(180, 100, 150, 150, radians(220), radians(280) );
  fill('#000080');
  arc(190, 200, 140, 140, radians(200), radians(250) );
  fill('#0000FF');
  arc(200, 300, 140, 140, radians(180), radians(230) );
  fill('#00FFFF');
  arc(270, 350, 130, 130, radians(140), radians(180) );
  fill('#008000');
  arc(350, 320, 120, 120, radians(110), radians(150) );
  fill('#33FF99');
  arc(400, 250, 110, 110, radians(90), radians(130) );
  fill('#FFFFA0');
  arc(380, 180, 90, 90, radians(70), radians(110) );
  fill('#FFB266');
  arc(320, 130, 90, 90, radians(40), radians(70) );
  fill('#FF4040');
  arc(260, 150, 70, 70, radians(320), radians(350) );
  fill('#FF0000');
  arc(240, 190, 50, 50, radians(280), radians(300) );
 
  fill(255)
  ellipse(300,200,50);   // 중앙 원 

  fill('#400000')
  stroke('#FF0000')
  strokeWeight(10)
  arc(500,0,200, 200, radians(90), radians(180) );     // 오른쪽 크고 붉은 원
}
