import Game from "./game";

// Physics objects should extend this class
export default class PhysicsObject {
    private game: Game;
    public position: { x: number, y: number };
    public width: number;
    public height: number;
    public velocity: { x: number, y: number } = { x: 0, y: 0 };
    public acceleration: { x: number, y: number } = { x: 0, y: 0 };
    public friction: { x: number, y: number } = { x: 0, y: 0 };
    public gravity: number = 10;

    constructor(width: number, height: number, position: { x: number, y: number }, game: Game) {
        this.width = width;
        this.height = height;
        this.position = position;
        this.game = game;
    }

    public update(dt: number) {}
    public draw(ctx: CanvasRenderingContext2D) {}
}
