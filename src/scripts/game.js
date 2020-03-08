class Game {
  constructor() {
    this.food = [3, 7];
    this.foodEaten = false;
    this.speed = 175;
    this.score = 0;
    this.gameInProgress = false;
  }

  init() {
    snake.body = [[10, 10]];
    snake.direction = 0;
    this.score = 0;
    let $score = document.querySelector('.player-score');
    $score.innerText = this.score;
    this.gameInProgress = false;
  }

  startGame() {
    let $startScore = document.querySelector('.player-score');
    $startScore.innerText = 0;
  }

  gameOver() {
    snake.detectCollision();
    this.collision();
    if (snake.detectCollision() || this.collision()) {
      document.querySelector(
        '.highscore'
      ).innerHTML = `Your Score: ${this.score}`;
      myGame.init();
    }
  }

  playerScore() {
    let $score = document.querySelector('.player-score');
    this.score += 10;
    $score.innerText = this.score;
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
    let randomX = Math.floor(Math.random() * 17) + 1;
    let randomY = Math.floor(Math.random() * 17) + 1;
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
      this.playerScore();
    } else {
      this.foodEaten = false;
    }
  }

  collision() {
    if (
      snake.body[0][0] === 0 ||
      snake.body[0][0] === 19 ||
      snake.body[0][1] === 0 ||
      snake.body[0][1] === 19
    ) {
      document.querySelector('.retry-screen').style.display = 'flex';
      document.querySelector('.gameOver').play();
      return true;
    }
  }

  gameLoad() {
    let gameInProgress = setInterval(function() {
      if (myGame.gameInProgress) {
        document.querySelector('.start-screen').style.display = 'none';
        snake.moveSnake(myGame.foodEaten);
        snake.changeDirection();
        myGame.draw();
        myGame.gameOver();
      }
    }, myGame.speed);
  }
}

let snake = new Snake();

let myGame = new Game();

document.querySelector('.start-game').addEventListener('click', function() {
  let difficulty = document.querySelector('.difficulty').value;
  myGame.speed = parseInt(difficulty);
  myGame.gameLoad();
  myGame.gameInProgress = true;
});

document.querySelector('.game-over').addEventListener('click', function() {
  document.querySelector('.retry-screen').style.display = 'none';
  myGame.gameInProgress = true;
});
