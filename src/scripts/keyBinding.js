function controls() {
  document.addEventListener('keydown', function(event) {
    if (event.keyCode === 65 && direction !== 'RIGHT') {
      // left.play();
      direction = 'LEFT';
    } else if (event.keyCode === 67 && direction !== 'DOWN') {
      // up.play();
      direction = 'UP';
    } else if (event.keyCode === 68 && direction !== 'LEFT') {
      // right.play();
      direction = 'RIGHT';
    } else if (event.keyCode === 83 && direction !== 'UP') {
      // down.play();
      direction = 'DOWN';
    } else {
      console.log('Unknown controls');
    }
  });
}

switch (event.code) {
  case 'ArrowRight':
    game.rover.turnRight();
    break;
  case 'ArrowLeft':
    game.rover.turnLeft();
    break;
  case 'Space':
    game.rover.moveForward();
    break;
  default:
    console.log('unknown controls');
}
