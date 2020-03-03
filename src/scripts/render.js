//
function renderSnake() {
  // let tilesPerRow = 32;
  let $snake = game.snake;
  let $snakeBody = game.body;
  let $background = document.querySelector('div #game .background');
  // let $clientWidth = $background.offsetWidth;

  function init() {
    $background.classList.add('background');
    // $snake = new Snake($clientWidth / tilesPerRow);
  }

  function update() {
    drawSnake();
    game.snake.update();
  }

  function drawSnake() {
    $snake.classList.add('snake-head');
    $snakeBody.classList.add('snake-body');
  }

  document.addEventListener('keydown', function(event) {
    switch (event.currentTarget) {
      case keyCode === 65 && game.direction !== 1:
        $snake.changeDirection(3);
        break;
      case keyCode === 67 && game.direction !== 2:
        $snake.changeDirection(0);
        break;
      case keyCode === 68 && game.direction !== 3:
        $snake.changeDirection(1);
        break;
      case keyCode === 83 && game.direction !== 0:
        $snake.changeDirection(2);
        break;
    }
  });

  function renderEverything() {
    init();
    drawSnake();
    update();
  }
}

renderSnake();
// setInterval(update, 1000 / fps);
