const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// using fillRect() method
// Takes 4 prams, x, y starting loc, and then width and height

ctx.fillStyle = "red";
ctx.fillRect(20, 20, 150, 100);

ctx.fillStyle = "blue";
ctx.fillRect(200, 20, 150, 100);

//strokeRect()
// outline of a rectangle, same values
ctx.lineWidth = 5;
ctx.strokeStyle = "green";
ctx.strokeRect(100, 200, 150, 100);

// clearRect()
// Will clear out part of a rectangle, used often in animation to clear the whole canvas on each paint
// If we want to clear the inner of the red rectangle
ctx.clearRect(25, 25, 140, 90);

// Those are main rectangle methods, you can create them in paths too

// TEXT

// fillText()
ctx.fillStyle = "purple";
ctx.font = "30px arial";
ctx.fillText("Hello World", 400, 50);

// strokeText()
ctx.lineWidth = 1;
ctx.strokeStyle = "orange";
ctx.strokeText("Hello World", 400, 100);
