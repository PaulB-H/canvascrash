## HTML5 Canvas API Crash Course

Traversy crash course <br>
[Youtube Link](https://www.youtube.com/watch?v=gm1QtePAYTM)

HTML5 Canvas element

    <canvas  id="canvas"  width="600"  height="600"></canvas>

    const  canvas = document.getElementById("canvas");

## Get Context

[developer.mozilla - getContext](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext)
getContext()

<hr>

## Rectangle

#### fillRect()

Takes 4 prams,
Starting x and y loc, and then width and height

    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 150, 100);

#### strokeRect()

outline of a rectangle, same values

    ctx.lineWidth = 5;
    ctx.strokeStyle = "green";
    ctx.strokeRect(100, 200, 150, 100);

#### clearRect()

Will clear out part of a rectangle, used often in animation to clear the whole canvas on each paint
If we want to clear the inner of the red rectangle<br>

    ctx.clearRect(25, 25, 140, 90);

<hr>

## TEXT

#### fillText()

    ctx.fillStyle = "purple";
    ctx.font = "30px arial";
    ctx.fillText("Hello World", 400, 50);

#### strokeText()

    ctx.lineWidth = 1;
    ctx.strokeStyle = "orange";
     ctx.strokeText("Hello World", 400, 100);

<hr>

## PATH

### Triangle

    ctx.beginPath();
    // move to x and y values
    ctx.moveTo(50, 50);
    // Line from moveTo() to (150, 50)
    ctx.lineTo(150, 50);
    // Line from (150, 50) to 100, 200
    ctx.lineTo(100, 200);

    ctx.lineTo(50, 50);
    OR
    ctx.closePath();

    // Create stroke with the above params
    ctx.stroke();
