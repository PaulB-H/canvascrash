const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// using fillRect() method
// Takes 4 prams, x, y starting loc, and then width and height
// ctx.fillStyle = "red";
// ctx.fillRect(20, 20, 150, 100);

// ctx.fillStyle = "blue";
// ctx.fillRect(200, 20, 150, 100);

// //strokeRect()
// // outline of a rectangle, same values
// ctx.lineWidth = 5;
// ctx.strokeStyle = "green";
// ctx.strokeRect(100, 200, 150, 100);

// // clearRect()
// // Will clear out part of a rectangle, used often in animation to clear the whole canvas on each paint
// // If we want to clear the inner of the red rectangle
// ctx.clearRect(25, 25, 140, 90);

// // Those are main rectangle methods, you can create them in paths too

// // TEXT

// // fillText()
// ctx.fillStyle = "purple";
// ctx.font = "30px arial";
// ctx.fillText("Hello World", 400, 50);

// // strokeText()
// ctx.lineWidth = 1;
// ctx.strokeStyle = "orange";
// ctx.strokeText("Hello World", 400, 100);

// Paths

// Triangle
// ctx.beginPath();
// // move to x and y values
// ctx.moveTo(50, 50);
// // Straight line  from where we moved to, to 150x 50 y
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 200);
// // ctx.lineTo(50, 50);
// ctx.closePath();

// // Create stroke with the above params
// // ctx.stroke();

// //Can also fill instead of stroke, must be complete shape
// ctx.fillStyle = "coral";
// ctx.fill();

// // Triangle
// ctx.beginPath();
// ctx.moveTo(200, 50);
// ctx.lineTo(150, 200);
// ctx.lineTo(250, 200);
// ctx.closePath();
// ctx.stroke();

// //Rectangle
// ctx.beginPath();
// ctx.rect(300, 50, 150, 100);
// ctx.fillStyle = "teal";
// ctx.fill();

// Arc (circle)
// Arc takes in an x and y value, the positioning for x and y is going to be the middle of the arc, or the middle of the circle, then the radius the size, start angle, end andle, and anticlockwise or not
ctx.beginPath();

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// draw the head
ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);

// Move to mouth
ctx.moveTo(centerX + 100, centerY);

// Draw mouth
ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

// Move to left eye
ctx.moveTo(centerX - 60, centerY - 80);

//Draw left eye
ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);

// Move to right eye
ctx.moveTo(centerX + 100, centerY - 80);

// Draw right eye
ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2);

// An arc is a circle or half circle
// There are also curves like bezier curves
// and quadratic curves, quadratic has one control point
// The first two argetn are x and y values of that control point
// For a bezier curve, we have 2 diff control points
// x and y for first, and x and y for next

// Quadratic Curve
ctx.moveTo(75, 25);
ctx.quadraticCurveTo(25, 25, 25, 62.5);
ctx.quadraticCurveTo(25, 100, 50, 100);
ctx.quadraticCurveTo(50, 120, 30, 125);
ctx.quadraticCurveTo(60, 120, 65, 100);
ctx.quadraticCurveTo(125, 100, 125, 62.5);
ctx.quadraticCurveTo(125, 25, 75, 25);

ctx.stroke();
