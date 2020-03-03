class Game {
  constructor() {
    this.food = [3, 7];
    this.foodEaten = false;
  }
  draw() {
    //clears the screen
    document.querySelectorAll('.gridrow-y').forEach(rowY => {
      rowY.querySelectorAll('.grid-x').forEach(event => {
        event.classList.remove('snake');
        event.classList.remove('food');
        event.classList.remove('snake-body');
      });
    });
    //draw snake
    for (let part of snake.body) {
      let x = part[0];
      let y = part[1];

      let $snake = document
        .querySelectorAll('.gridrow-y')
        [y].querySelectorAll('.grid-x')[x];
      $snake.classList.add('snake');
      if (snake.body.indexOf(part) !== 0) {
        $snake.classList.add('snake-body');
      }
    }
    this.foodEaten = false;
    this.drawFood();
    this.eatenFood();
  }

  randomFood() {
    let randomX = Math.floor(Math.random() * 10);
    let randomY = Math.floor(Math.random() * 10);
    console.log(randomX, randomY);
    this.food = [randomX, randomY];
    console.log(this.food);
  }

  drawFood() {
    let x = this.food[0];
    let y = this.food[1];
    let $food = document
      .querySelectorAll('.gridrow-y')
      [y].querySelectorAll('.grid-x')[x];
    console.log($food);
    $food.classList.add('food');
  }

  eatenFood() {
    let $audioFx = document.querySelector('.score');
    if (
      snake.body[0][0] === this.food[0] &&
      snake.body[0][1] === this.food[1]
    ) {
      $audioFx.play();
      this.foodEaten = true;
      this.food = [];
      this.randomFood();
    } else {
      this.foodEaten = false;
    }
  }

  // collision() {
  //   let lastX = document.querySelectorAll('gridrow-y')[9];
  //   let lastY = document.querySelectorAll('gridrow-x')[9];
  //   let firstX = document.querySelectorAll('gridrow-y')[0];
  //   let firstY = document.querySelectorAll('gridrow-x')[0];
  //   if (
  //     snake.body[0][0] === lastX ||
  //     snake.body[0][0] === firstX ||
  //     snake.body[0][1] === firstY ||
  //     snake.body[0][1] === lastY
  //   ) {
  //     console.log('Game Over');
  //     return true;
  //   }

  // }

  renderEverything() {}
}

let snake = new Snake();

let myGame = new Game();
setInterval(function() {
  snake.moveSnake(myGame.foodEaten);
  snake.changeDirection();
  myGame.draw();
}, 250);
// myGame.collision();
myGame.soundFx();
