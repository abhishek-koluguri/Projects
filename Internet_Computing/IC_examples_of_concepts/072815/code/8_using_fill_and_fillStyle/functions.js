var drawOn = function(canvas) {
  var center = {
    x: canvas.width / 2,
    y: canvas.height / 2
  };
  var radius = 50;

  var context = canvas.getContext('2d');
  
  context.lineWidth = 3;
  context.strokeStyle = 'blue';
  context.fillStyle = 'red';
  context.arc(center.x, center.y, radius,
      0, 2 * Math.PI, false);
  context.fill();
  context.stroke();
  
}