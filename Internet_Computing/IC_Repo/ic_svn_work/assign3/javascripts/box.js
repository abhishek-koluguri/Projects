var box;

var Box = function()
{
	
	this.drawBox = function(center, canvas, context){
	
		drawLine(center.x - canvas.width / 2, center.y - canvas.height / 2, center.x - canvas.width / 2, center.y + canvas.height / 2, 'blue', context);
		drawLine(center.x - canvas.width / 2, center.y + canvas.height / 2, center.x + canvas.width / 2, center.y + canvas.height / 2, 'blue', context);
		drawLine(center.x + canvas.width / 2, center.y + canvas.height / 2, center.x + canvas.width / 2, center.y - canvas.height / 2, 'blue', context);
	}

}