function init() {
  draw();
}

// ===========================
// =========DRAWING===========
// ===========================
player.locX = Math.floor(500 * Math.random() + 10);
player.locY = Math.floor(500 * Math.random() + 10);

function draw() {
  context.beginPath(); // start drawing
  context.fillStyle = "rgb(255,0,0)"; // what ever we draw is going to be filled with red

  // arg1,2 = x,y of the center of the arc
  // arg3 = radius of the circle
  // arg4 = where to start on the circle in radians, 0rad=3:00
  // arg5 = where to stop in radians
  context.arc(player.locX, player.locY, 10, 0, Math.PI * 2); // draw an arc - arc all the way around makes a circle
  context.fill();
  context.lineWidth = 3;
  context.strokeStyle = "rgb(0,255,0)";
  context.stroke();
  requestAnimationFrame(draw); // recursively call this function forever, for every `new frame the browser is capable of running
}

canvas.addEventListener("mousemove", (event) => {
  const mousePosition = {
    x: event.clientX,
    y: event.clientY,
  };
  const angleDeg =
    (Math.atan2(
      mousePosition.y - canvas.height / 2,
      mousePosition.x - canvas.width / 2
    ) *
      180) /
    Math.PI;
  if (angleDeg >= 0 && angleDeg < 90) {
    xVector = 1 - angleDeg / 90;
    yVector = -(angleDeg / 90);
  } else if (angleDeg >= 90 && angleDeg <= 180) {
    xVector = -(angleDeg - 90) / 90;
    yVector = -(1 - (angleDeg - 90) / 90);
  } else if (angleDeg >= -180 && angleDeg < -90) {
    xVector = (angleDeg + 90) / 90;
    yVector = 1 + (angleDeg + 90) / 90;
  } else if (angleDeg < 0 && angleDeg >= -90) {
    xVector = (angleDeg + 90) / 90;
    yVector = 1 - (angleDeg + 90) / 90;
  }

  speed = 10;
  xV = xVector;
  yV = yVector;

  // move the user by the speed
  if (
    (player.locX < 5 && player.xVector < 0) ||
    (player.locX > 500 && xV > 0)
  ) {
    player.locY -= speed * yV;
  } else if ((player.locY < 5 && yV > 0) || (player.locY > 500 && yV < 0)) {
    player.locX += speed * xV;
  } else {
    player.locX += speed * xV;
    player.locY -= speed * yV;
  }
});
