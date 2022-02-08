import Object from "./engine/object";
import V2 from "./engine/util/vector";
import InputHandler from "./engine/input";

export enum PlayerState {
    STANDING,
    WALKING,
    JUMPING,
    DUCKING,
}

export default class Player extends Object {
    public state: PlayerState = PlayerState.STANDING;
    public inputHandler: InputHandler;
    public duckingSize: V2;
    public standingSize: V2;
    public maxSpeed: number = 5;

    constructor(position: V2, size: V2, inputHandler: InputHandler) {
        super(position, size);

        this.standingSize = size;
        this.duckingSize = new V2(size.x, size.y * 0.7);

        this.mass = 1;
        this.inputHandler = inputHandler;
    }

    // Bad state machine, but it works for now..
    public updateState(): void {
        switch (this.state) {
            case PlayerState.STANDING:
                if (this.inputHandler.isKeyDown["ArrowLeft"]) {
                    this.walk(0);
                } else if (this.inputHandler.isKeyDown["ArrowRight"]) {
                    this.walk(1);
                } else if (this.inputHandler.isKeyDown["ArrowUp"]) {
                    this.jump();
                } else if (this.inputHandler.isKeyDown["ArrowDown"]) {
                    this.duck();
                }
                break;
            case PlayerState.WALKING:
                if (this.inputHandler.isKeyDown["ArrowUp"]) {
                    this.jump();
                } else if (this.inputHandler.isKeyDown["ArrowLeft"]) {
                    this.walk(0);
                } else if (this.inputHandler.isKeyDown["ArrowRight"]) {
                    this.walk(1);
                } else if (!this.inputHandler.isKeyDown["ArrowLeft"] && !this.inputHandler.isKeyDown["ArrowRight"]) {
                    this.stand();
                }
                break;
            case PlayerState.JUMPING:
                if (this.inputHandler.isKeyDown["ArrowLeft"]) {
                    this.acceleration.x += -0.1;
                } else if (this.inputHandler.isKeyDown["ArrowRight"]) {
                    this.acceleration.x += 0.1;
                } else if (this.velocity.y == 0) {
                    this.stand();
                }
                break;
            case PlayerState.DUCKING:
                if (!this.inputHandler.isKeyDown["ArrowDown"]) {
                    this.stand();
                }
                break;
        }
    }

    public jump(): void {
        this.state = PlayerState.JUMPING;
        this.acceleration.y += -5;
    }

    public duck(): void {
        this.state = PlayerState.DUCKING;
        this.size = this.duckingSize;
    }

    public stand(): void {
        this.size = this.standingSize;
        this.state = PlayerState.STANDING;
        this.velocity.x *= 0.7;
    }

    public walk(direction: number): void {
        this.state = PlayerState.WALKING;
        if (direction > 0) {
            this.acceleration.x += 0.1;
        } else {
            this.acceleration.x += -0.1;
        }
    }

    public clampSpeed(): void {
        if (this.velocity.x > this.maxSpeed) {
            this.velocity.x = this.maxSpeed;
        } else if (this.velocity.x < -this.maxSpeed) {
            this.velocity.x = -this.maxSpeed;
        }
    }

    public update(dt: number): void {
        this.updateState();
        super.update(dt);
        this.clampSpeed();
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        super.draw(ctx);
    }
}