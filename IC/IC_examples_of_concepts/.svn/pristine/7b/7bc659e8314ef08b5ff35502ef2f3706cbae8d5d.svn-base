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
      0, 2 * Math.PI, false);
  context.stroke();
  
  var drawLine = function(startX, startY, endX, endY) {
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();    
  }
  
  drawLine(center.x, center.y - radius, center.x, center.y + radius);

  var drawLineAtAnAngle = function(centerX, centerY, radius, angle) {
    var x = centerX + radius * Math.cos(angle * Math.PI);
    var y = centerY + radius * Math.sin(angle * Math.PI);
    drawLine(centerX, centerY, x, y);    
  }

  drawLineAtAnAngle(center.x, center.y, radius, 0.75);
  drawLineAtAnAngle(center.x, center.y, radius, 0.25);
}