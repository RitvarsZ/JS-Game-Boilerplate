import Config from "./config";
import InputHandler from "./engine/input";
import PhysicsEngine from "./engine/engine";
import V2 from "./engine/util/vector";
import Player from "./player";

export default class Game {
    public inputHandler: InputHandler;
    public engineInstance: PhysicsEngine;

    public player: Player;

    constructor() {
        this.engineInstance = new PhysicsEngine();
        this.inputHandler = new InputHandler();

       this.player = new Player(
           new V2(Config.GAME_WIDTH/2, 150),
           new V2(50, 75),
           this.inputHandler
        );

        this.engineInstance.addObject(this.player);
    }

    public update(dt: number) {
        this.engineInstance.update(dt);
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "#222";
        ctx.fillRect(0, 0, Config.GAME_WIDTH, Config.GAME_HEIGHT);

        this.engineInstance.objectList.forEach(obj => obj.draw(ctx));
    }

}
