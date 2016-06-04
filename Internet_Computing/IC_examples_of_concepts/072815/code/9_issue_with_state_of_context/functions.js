var drawOn = function(canvas) {
  var center = {
    x: canvas.width / 2,
    y: canvas.height / 2
  };
  var displacement = 50;

  var context = canvas.getContext('2d');
  
  context.lineWidth = 3;

  context.strokeStyle = 'blue';  
  context.moveTo(center.x - displacement, center.y + displacement);
  context.lineTo(center.x - displacement, center.y);
  context.stroke();
  
  context.strokeStyle = 'red';  
  context.moveTo(center.x - displacement, center.y);
  context.lineTo(center.x + displacement, center.y);
  context.stroke();

  context.strokeStyle = 'blue';  
  context.moveTo(center.x + displacement, center.y);
  context.lineTo(center.x + displacement, center.y + displacement);
  context.stroke();
}