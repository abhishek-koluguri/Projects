var pad;

var Pad = function()
{
	var canvas;
	var context;
	var center;
	var previousX;
	var currentX;
	var e;
	var obj;

	this.setValues = function(theCenter, theCanvas, theContext, pad){
	
		obj = pad;
		this.center = theCenter;
		
		this.canvas = theCanvas;
		this.context = theContext;
	}
	
	this.setPad = function(){
		
		this.currentX = this.center.x - this.canvas.width / 2;
		drawLine(this.center.x - this.canvas.width / 2, this.center.y - this.canvas.height / 2, (this.center.x - this.canvas.width / 2) + this.canvas.width * (1/10) , this.center.y - this.canvas.height / 2, 'red', this.context);
	}

	this.drawPad = function(){
		
		
		drawLine(this.currentX, this.center.y - this.canvas.height / 2, this.currentX + this.canvas.width * (1/10) , this.center.y - this.canvas.height / 2, 'red', this.context);
	}
	
	this.trackPosition = function(e){
		
		
		mousePositionX = {
				
			x: e.clientX - obj.canvas.offsetLeft			
		};
		
		if(mousePositionX.x > (obj.center.x - obj.canvas.width / 2) && mousePositionX.x < ((obj.center.x + obj.canvas.width / 2)- obj.canvas.width * (1/10)))
		{
			obj.currentX = mousePositionX.x;
		}
	}
}