class Maze {
  constructor() {
    if (this.constructor === Maze) {
      throw new TypeError('Abstract class "Maze" cannot be instantiated');
    }
  }
}

class room extends Maze {
  constructor(nextMaze) {
    super(nextMaze);
    this.nextMaze = nextMaze;
  }
  play() {
    var description =
      "You pass through a hallway and open a door. Do you continue? (y)(n) ";
    var response = readline();
    console.log(description);
    if (response === "y") {
      console.log("you continue and ");
      nextMaze.play();
    } else if (response === "n") {
      while (response != "y") {
        console.log(
          "You stand still like a complete idiot, do you continue now? (y) (n) "
        );
      }
    } else {
      console.log("Invalid response try again");
    }
  }
}
class exit extends Maze {
  constructor() {
    super(description);
    var description = "You found the exit! You've won!";
  }
  play() {
    console.log(description);
  }
}
let myMaze1 = new exit();
let myMaze = new room(myMaze1);
myMaze.play();
