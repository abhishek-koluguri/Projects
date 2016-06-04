var drawOn = function(canvas) {
  var center = {
    x: canvas.width / 2,
    y: canvas.height / 2
  };
  var radius = 50;

  var context = canvas.getContext('2d');
  
  context.lineWidth = 3;
  context.strokeStyle = 'blue';
  context.arc(center.x, center.y, radius,
      1.25 * Math.PI, 1.75 * Math.PI, false); //try true instead of false for the last argument
  context.stroke();
}