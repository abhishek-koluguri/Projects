var drawLine = function(startX, startY, endX, endY, color) {
    
	context.beginPath();
	context.moveTo(startX, startY);
    context.line+To(endX, endY);
	context.strokeStyle = color;
	context.lineWidth = 5;
	context.stroke();    
}