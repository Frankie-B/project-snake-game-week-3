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
    this.food.push([randomX, randomY]);
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
    if (
      snake.body[0][0] === this.food[0] &&
      snake.body[0][1] === this.food[1]
    ) {
      this.foodEaten = true;
      this.food = [];
      this.randomFood();
    } else {
      this.foodEaten = false;
    }
  }

  renderEverything() {}
}

let snake = new Snake();

let myGame = new Game();
setInterval(function() {
  snake.moveSnake(myGame.foodEaten);
  snake.changeDirection();
  myGame.draw();
}, 250);
