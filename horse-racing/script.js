class Horse {
    constructor(y, isPlayer) {
      this.x = 0;
      this.y = y;
      this.isPlayer = isPlayer;
      this.direction = 1;
    }
    move() {
      if (!this.isPlayer) {
          this.x += Math.random() * 3 * this.direction;
      }

      if(this.x >= canvas.width) {
          this.direction = -1;
      }
    }
    draw() {
        pen.beginPath();
        pen.drawImage(horseImg, this.x, this.y, 50, 50);
        pen.stroke();
    }
  }


let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let pen = canvas.getContext('2d');
let horseImg = new Image ();
horseImg.src = 'https://i.pinimg.com/736x/e3/ab/d2/e3abd2c3b64151e4c1dfe59e5a2227dc--rainbow-drawing-rainbow-painting.jpg'

let horses = [
    new Horse(0, true), 
    new Horse (40), 
    new Horse (80),
    new Horse (120),
    new Horse (160),
    new Horse (200),
    new Horse (240),
];

setInterval(function() {
    pen.beginPath();
    pen.clearRect(0, 0, 1000, 1000);

    for (let i = 0; i<horses.length; i++) {
        horses[i].move();
        horses[i].draw();
    }

}, 1000/60);


document.addEventListener('mousemove', function() {
    horses[0].x++;
});




