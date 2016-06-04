var createHandler = function(canvas) {
  var center = {
    x: canvas.width / 2,
    y: canvas.height / 2
  };
  var radius = 10;

  var context = canvas.getContext('2d');
  
  var rand = function() {
    return parseInt(Math.random() * 255);
  }
  
  var drawCircle = function(position) {
    context.beginPath();
    context.arc(position.x, position.y, radius, 0, 2 * Math.PI, true);
    
    var color = "rgb(" + rand() + ", " + rand() + ", " + rand() + ")";
    context.strokeStyle = color;
    context.fillStyle = color;
    context.fill();
    context.stroke();
  }
  
  var mouseUpHandler = function(mouseEvent) {
    var mousePosition = {
      x: mouseEvent.clientX - canvas.offsetLeft,
      y: mouseEvent.clientY - canvas.offsetTop
    };
    
    drawCircle(mousePosition);
  }
  
  var touchEndHandler = function(touchEvent) {
    alert('touch');
  }
  
  return {
    mouseUpHandler: mouseUpHandler,
    touchEndHandler: touchEndHandler
  };
}
