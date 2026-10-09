
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var x = 500;
var y = 250;
var radius = 30;
var xSpeed = 5;
var ySpeed = 0;

function drawBall()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.arc(x, y, radius, 0, 360 * Math.PI / 180, true);

    context.fillStyle = "red";
    context.fill();
    
    ball.x += ball.vx;
    ball.y += ball.vy;

    if (ball.x + ball.radius >= canvas.width)
    {
        ball.x = canvas.width;
        ball.x -+ ball.radius;
        ball.vx = -ball.vx;
    }

    if (ball.x - ball.radius <= 0)
    {
        ball.x = ball.radius;
        ball.vx = ball.vx
    }

}

   x = x + xSpeed;
   y = y + ySpeed;
   
setInterval(drawBall, 20);