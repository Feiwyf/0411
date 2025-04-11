let circles = [];
const circleCount = 40;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background('skyblue'); // 背景顏色設為天藍色

  // 初始化圓的資料
  for (let i = 0; i < circleCount; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      radius: random(30, 100), // 初始大小 30 到 100
      color: color(random(255), random(255), random(255)) // 隨機鮮豔顏色
    });
  }
}

function draw() {
  background('skyblue'); // 每次重繪背景

  // 根據滑鼠位置計算大小比例
  let scaleFactor = map(mouseX, 0, width, 0.3, 1.0);

  // 繪製圓
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.radius * scaleFactor); // 動態改變大小
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 畫布隨視窗大小調整
}
