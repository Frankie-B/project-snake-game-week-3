class Snake {
  constructor() {
    this.direction = 0; //0=up, 1=right, 2=down, 3=left
    this.body = [[10, 10]];
  }
  moveSnake(eatenFood) {
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
    if (!eatenFood) {
      this.body.pop();
    }
  }

  changeDirection() {
    document.addEventListener('keydown', function(event) {
      if (event.keyCode === 65 && snake.direction !== 1) {
        snake.direction = 3;
        document.querySelector('.left').play();
      } else if (event.keyCode === 87 && snake.direction !== 2) {
        document.querySelector('.up').play();
        snake.direction = 0;
      } else if (event.keyCode === 68 && snake.direction !== 3) {
        document.querySelector('.right').play();
        snake.direction = 1;
      } else if (event.keyCode === 83 && snake.direction !== 0) {
        document.querySelector('.down').play();
        snake.direction = 2;
      } else {
        console.log('Unknown controls');
      }
    });
  }

  detectCollision() {
    // Self collison
    for (let i = 4; i < this.body.length; i++) {
      const selfCollison =
        this.body[i][0] === this.body[0][0] &&
        this.body[i][1] === this.body[0][1];

      if (selfCollison) {
        document.querySelector('.retry-screen').style.display = 'flex';
        document.querySelector('.gameOver').play();
        return true;
      }
    }
  }
}
