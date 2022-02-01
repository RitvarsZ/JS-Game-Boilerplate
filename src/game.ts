import InputHandler from "./inputhandler";
import PhysicsObject from "./physicsobject";

export default class Game {
    public gameWidth: number;
    public gameHeight: number;
    public InputHandler: InputHandler;
    public physicsObjects: PhysicsObject[] = [];
    public DEBUG: boolean = false;

    constructor(gameWidth: number, gameHeight: number) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.InputHandler = new InputHandler(this);
    }

    public update(dt: number) {
        this.physicsObjects.forEach(obj => obj.update(dt));
    }

    public draw(ctx: CanvasRenderingContext2D) {
        this.physicsObjects.forEach(obj => obj.draw(ctx));

        ctx.fillStyle = "#222";
        ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);

        ctx.strokeStyle = "#eee";
        ctx.font = "bold 70px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.strokeText("Hello World!", this.gameWidth / 2, this.gameHeight / 2);
    }

}
