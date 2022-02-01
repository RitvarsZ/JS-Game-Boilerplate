import Game from './game';

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let canvas = document.getElementById('game') as HTMLCanvasElement;
let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
let time = 0;

function gameLoop(timestamp: number) {
    let dt = timestamp - time;
    time = timestamp;

    // Clear the canvas before each frame.
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    game.update(dt);
    game.draw(ctx);

    requestAnimationFrame(gameLoop);
}

// Start the game loop
requestAnimationFrame(gameLoop);
