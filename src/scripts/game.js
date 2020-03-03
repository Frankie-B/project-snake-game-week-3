class Game {
  constructor() {}
  draw() {
    //clears the screen
    document.querySelectorAll('.gridrow-y').forEach(rowY => {
      rowY.querySelectorAll('.grid-x').forEach(event => {
        event.classList.remove('snake');
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
    }
  }
}

let snake = new Snake();
let myGame = new Game();
