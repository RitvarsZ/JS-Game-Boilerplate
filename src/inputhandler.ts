import Game from "./game";

export default class InputHandler {
    private game: Game;

    constructor(game: Game) {
        this.game = game;

        window.addEventListener("keydown", this.keyDown.bind(this));
        window.addEventListener("keyup", this.keyUp.bind(this));
        window.addEventListener("mousedown", this.mouseDown.bind(this));
        window.addEventListener("mouseup", this.mouseUp.bind(this));
        window.addEventListener("mousemove", this.mouseMove.bind(this));
    }

    public keyDown(event: KeyboardEvent) {
        // switch (event.keyCode) {
        //     case 37: // left
        //         this.game.player.moveLeft = true;
        //         break;
        //     case 38: // up
        //         this.game.player.moveUp = true;
        //         break;
        //     case 39: // right
        //         this.game.player.moveRight = true;
        //         break;
        //     case 40: // down
        //         this.game.player.moveDown = true;
        //         break;
        //     case 32: // space
        //         this.game.player.jump();
        //         break;
        // }
    }

    public keyUp(event: KeyboardEvent) {
    }

    public mouseDown(event: MouseEvent) {
    }

    public mouseUp(event: MouseEvent) {
    }

    public mouseMove(event: MouseEvent) {
    }
}
