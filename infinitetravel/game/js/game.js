const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 400;

class Player {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.dy = 0; // Vertical velocity
        this.dx = 0; // Horizontal velocity
        this.gravity = 0.5; // Gravity effect
        this.jumpStrength = -10; // Jump velocity
        this.grounded = false; // Is the player on the ground?
    }

    update() {
        // Apply gravity
        if (!this.grounded) {
            this.dy += this.gravity;
        }

        // Update position
        this.y += this.dy;
        this.x += this.dx;

        // Check for ground collision
        if (this.y + this.height >= canvas.height) {
            this.y = canvas.height - this.height;
            this.dy = 0;
            this.grounded = true;
        } else {
            this.grounded = false;
        }

        // Handle jump
        if (keys["ArrowUp"] || keys["w"] && this.grounded) {
            this.dy = this.jumpStrength;
            this.grounded = false;
        }

        // Handle left and right movement
        if (keys["ArrowLeft"] || keys["a"]) {
            this.dx = -5;
        } else if (keys["ArrowRight"] || keys["d"]) {
            this.dx = 5;
        } else {
            this.dx = 0;
        }
    }

    draw() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

const player = new Player(canvas.width / 2, canvas.height - 30, 30, 30);

let keys = {};
window.addEventListener("keydown", (e) => (keys[e.key] = true));
window.addEventListener("keyup", (e) => (keys[e.key] = false));

function update() {
    player.update();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
