class Snake {
  constructor() {
    this.direction = 0; //0=up, 1=right, 2=down, 3=left
    this.body = [[4, 4]];
  }
  moveSnake() {
    let newPosX;
    let newPosY;
    switch (this.direction) {
      case 0:
        newPosX = this.body[0][0];
        newPosY = this.body[0][1] - 1;
        console.log('up');
        break;
      case 1:
        newPosX = this.body[0][0] + 1;
        newPosY = this.body[0][1];
        console.log('right');
        break;
      case 2:
        newPosX = this.body[0][0];
        newPosY = this.body[0][1] + 1;
        console.log('down');
        break;
      case 3:
        newPosX = this.body[0][0] - 1;
        newPosY = this.body[0][1];
        console.log('left');
        break;
    }
    this.body.unshift([newPosX, newPosY]);
    this.body.pop();
  }

  changeDirection() {
    document.addEventListener('keydown', function(event) {
      if (event.keyCode === 65 && snake.direction !== 1) {
        // left.play();
        snake.direction = 3;
      } else if (event.keyCode === 87 && snake.direction !== 2) {
        // up.play();
        snake.direction = 0;
      } else if (event.keyCode === 68 && snake.direction !== 3) {
        // right.play();
        snake.direction = 1;
      } else if (event.keyCode === 83 && snake.direction !== 0) {
        // down.play();
        snake.direction = 2;
      } else {
        console.log('Unknown controls');
      }
    });
  }
}

//this global scope! not inside the snake or game!

setInterval(function() {
  snake.moveSnake();
  snake.changeDirection();
  myGame.draw();
}, 275);
