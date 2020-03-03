class Game {
  constructor() {
    this.snake = new Snake();
    this.body = new Body();
  }

  start() {
    let fps = 3;
    this.renderGame = setInterval(() => {
      renderEverything();
    }, 1000 / fps);
  }
}

let game = new Game();
// game.start();
