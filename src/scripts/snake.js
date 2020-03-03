class Snake {
  constructor(size, tileCount) {
    this.posX = 3;
    this.posY = 1;
    this.size = size;
    this.tileCount = tileCount;
    this.direction = 2; // 0 up 1 right 2 down 3 left
    // this.background = game.snake;

    this.body = [];
  }

  update() {
    this.updateBody();
    this.moveSnake();
  }

  updateBody() {
    if (this.body > 0) {
      this.body.pop();
      this.growBody();
    }
  }

  growBody() {
    this.body.unshift(new Body(this.posX, this.posY, this.size));
  }

  changeDirection(newDir) {
    this.direction = newDir;
  }

  moveSnake() {
    switch (this.direction) {
      case 0:
        this.posY -= 1;
        console.log('left');
        break;
      case 1:
        this.posX += 1;
        console.log('right');
        break;
      case 2:
        this.posY += 1;
        console.log('moving down');
        break;
      case 3:
        this.posX -= 1;
        console.log('moving right');
        break;
    }
  }
}
