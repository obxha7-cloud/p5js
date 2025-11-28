function setup() {
  createCanvas(600, 400);
  background(240, 230, 220);
}

function draw() {
  // 옷
  stroke(40);
  strokeWeight(2);
  fill('#6666FF');
  ellipse(300, 410, 500, 140);

  // 셔츠 옷깃
  stroke(40);
  strokeWeight(2);
  fill('#FFE5CC');
  arc(300, 340, 85, 60, HALF_PI, PI);
  arc(300, 340, 85, 60, 0, HALF_PI);

  // 목
  noStroke();
  fill('#FFE5CC');
  rect(270, 310, 60, 30);

  // 얼굴
  stroke(50);
  strokeWeight(2);
  fill('#FFE5CC');
  ellipse(300, 200, 200, 230);

  // ===== 헤어  =====
  noStroke();
  fill(20);

  // 왼쪽 머리
  arc(242, 165, 80, 160, PI, TWO_PI);
  // 오른쪽 머리
  arc(358, 165, 80, 160, PI, TWO_PI);

  // 
  arc(300, 130, 180, 120, PI, TWO_PI);
  
    // 볼
  noStroke();
  fill('#FFCCCC')
  ellipse(250, 240, 60, 20)
  ellipse(350, 240, 60, 20)
  
  // 코
  stroke(0);
  strokeWeight(2);
  line(300,200, 310, 240)
  line(310,240, 300, 235)

  // ===== 안경 =====
  stroke(0);
  strokeWeight(4);
  noFill();
  ellipse(250, 200, 80, 80);
  ellipse(350, 200, 80, 80);
  line(290, 200, 310, 200);
  

  // ===== 눈 =====
  noStroke();
  fill(255);
  ellipse(250, 200, 28, 28);
  fill(10);
  ellipse(250, 200, 15, 15);
  fill(255);
  ellipse(255, 197, 6, 6);

  fill(255);
  ellipse(350, 200, 28, 28);
  fill(10);
  ellipse(350, 200, 15, 15);
  fill(255);
  ellipse(355, 197, 6, 6);

  // 눈썹
  fill(20);
  arc(250, 185, 50, 20, PI, TWO_PI);
  arc(350, 185, 50, 20, PI, TWO_PI);

  // 눈꺼풀
  stroke(80, 60, 60);
  strokeWeight(2);
  noFill();
  arc(250, 198, 28, 20, PI+0.2, TWO_PI-0.2);
  arc(350, 198, 28, 20, PI+0.2, TWO_PI-0.2);

  // 입
  stroke(0);
  strokeWeight(2);
  line(290, 265, 310, 265);
  
  // 입 모양
  fill('#FFC0C0')
  arc(300, 265, 20, 40, 0, PI);
} 