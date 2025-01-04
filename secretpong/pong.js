// Simple Pong game
const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');

// Game objects
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 5,
    speed: 4,
    dx: 4,
    dy: 4,
    color: '#39FF14' // Cyber green color
};

const paddleHeight = 60;
const paddleWidth = 10;
const leftPaddle = {
    x: 0,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    dy: 0,
    speed: 8,
    color: '#39FF14'
};

const rightPaddle = {
    x: canvas.width - paddleWidth,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    dy: 0,
    speed: 8,
    color: '#39FF14'
};

let leftScore = 0;
let rightScore = 0;

// Event listeners for paddle movement
document.addEventListener('keydown', (e) => {
    if (e.key === 'w') leftPaddle.dy = -leftPaddle.speed;
    if (e.key === 's') leftPaddle.dy = leftPaddle.speed;
    if (e.key === 'ArrowUp') rightPaddle.dy = -rightPaddle.speed;
    if (e.key === 'ArrowDown') rightPaddle.dy = rightPaddle.speed;
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'w' || e.key === 's') leftPaddle.dy = 0;
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') rightPaddle.dy = 0;
});

// Reset ball to center
function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = -ball.dx;
}

// Draw game objects
function draw() {
    // Clear canvas
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw center line
    ctx.beginPath();
    ctx.setLineDash([5, 5]);
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.strokeStyle = '#39FF14';
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw paddles
    ctx.fillStyle = leftPaddle.color;
    ctx.fillRect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height);
    ctx.fillStyle = rightPaddle.color;
    ctx.fillRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height);

    // Draw ball
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();

    // Draw scores
    ctx.font = '32px "Courier New"';
    ctx.fillStyle = '#39FF14';
    ctx.fillText(leftScore, canvas.width / 4, 50);
    ctx.fillText(rightScore, 3 * canvas.width / 4, 50);
}

// Update game objects
function update() {
    // Move paddles
    leftPaddle.y += leftPaddle.dy;
    rightPaddle.y += rightPaddle.dy;

    // Keep paddles in bounds
    [leftPaddle, rightPaddle].forEach(paddle => {
        if (paddle.y < 0) paddle.y = 0;
        if (paddle.y + paddle.height > canvas.height) {
            paddle.y = canvas.height - paddle.height;
        }
    });

    // Move ball
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Ball collision with top and bottom
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy = -ball.dy;
    }

    // Ball collision with paddles
    [leftPaddle, rightPaddle].forEach(paddle => {
        if (ball.x + ball.radius > paddle.x && 
            ball.x - ball.radius < paddle.x + paddle.width &&
            ball.y + ball.radius > paddle.y &&
            ball.y - ball.radius < paddle.y + paddle.height) {
            ball.dx = -ball.dx;
            // Increase speed slightly
            if (Math.abs(ball.dx) < 15) {
                ball.dx *= 1.1;
                ball.dy *= 1.1;
            }
        }
    });

    // Score points
    if (ball.x + ball.radius > canvas.width) {
        leftScore++;
        resetBall();
    } else if (ball.x - ball.radius < 0) {
        rightScore++;
        resetBall();
    }
}

// Game loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();
