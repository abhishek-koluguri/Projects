var balls;

var Balls = function()
{
	var positionX;
	var positionY;
	var radius;
	var	speedX;
	var	speedY;
	var context;
	var	canvas;
	var center;
	var hits;
	var color;
	
	this.setValues = function(theRadius, theSpeed, theContext, theCanvas, theCenter, theColor, hits)
	{
		
		this.radius = theRadius;
		this.speedX = theSpeed;
		this.speedY = theSpeed;
		this.context = theContext;
		this.canvas = theCanvas;
		this.color = theColor;
		this.center = theCenter;
		this.hits = 0;
	}
	
	this.drawBall = function(thePositionX, thePositionY, rad) {
    	
		this.positionX = thePositionX;
		this.positionY = thePositionY;
		this.radius = rad;
		
		this.context.beginPath();
		this.context.arc(this.positionX, this.positionY, this.radius, 0, 2 * Math.PI, true);
    			
		this.context.strokeStyle = this.color;
		this.context.fillStyle = this.color;
		this.context.fill();
		this.context.stroke();	
	}
	
	this.moveBalls = function(pad, balls, i)
	{
		this.checkCollision(pad, balls, i);
		if(typeof(balls[i]) != 'undefined')
		{
			this.positionX = this.positionX + this.speedX;
			this.positionY = this.positionY + this.speedY;
			this.drawBall(this.positionX, this.positionY, this.radius, context);
		}
	}
	
	this.checkCollision = function(pad, balls, i)
	{
		var distanceFromLeftEndOfPad = Math.sqrt( Math.pow((this.positionX - pad.currentX), 2) + Math.pow(this.positionY - (this.center.y - this.canvas.height / 2), 2));
		var distanceFromRightEndOfPad = Math.sqrt( Math.pow((this.positionX - (pad.currentX + this.canvas.width * (1/10))), 2) + Math.pow(this.positionY - (this.center.y - this.canvas.height / 2), 2));
		
		
		if((this.positionY + 2*this.radius) < (this.center.y - this.canvas.height / 2)){
			delete balls[i] ;
			ballsLeft --;
		}
		else if(((this.positionX - this.radius) <= (this.center.x - this.canvas.width / 2)) || ((this.positionX + this.radius) >= (this.center.x + this.canvas.width / 2)))
		{
			this.speedX = - this.speedX;
		}

		else if( ((this.positionY + this.radius) >= (this.center.y + this.canvas.height / 2)))
		{
			this.speedY = - this.speedY;
		}
		else if(((this.positionY - this.radius) <= (this.center.y - this.canvas.height / 2)) || distanceFromLeftEndOfPad <= this.radius || distanceFromRightEndOfPad <= radius)
		{
			
			if(distanceFromLeftEndOfPad <= this.radius || distanceFromRightEndOfPad <= radius)
			{
				if(this.positionX ===  this.center.x - (this.canvas.width/2))
				{
					this.speedX = - this.speedX * 1.1;
				}
				else if(this.positionY <  this.center.y - (this.canvas.height/2))
				{
					
					if(distanceFromLeftEndOfPad <= this.radius)
					{	
						if(this.speedX > 0)
							this.speedX = - this.speedX * 1.1;
					}
					else if(distanceFromRightEndOfPad <= this.radius)
					{
						if(this.speedX < 0)
							this.speedX = - this.speedX * 1.1;
					}
				}
				else if(this.positionY >  this.center.y - (this.canvas.height/2))
				{
					
					if(distanceFromLeftEndOfPad <= this.radius)
					{	
							if(this.speedX < 0 && this.speedY < 0)
							{
								this.speedY = - this.speedY * 1.1;
							}
							else
							{
								this.speedX = - this.speedX * 1.1;
								this.speedY = - this.speedY * 1.1;
							}
					}
					else if(distanceFromRightEndOfPad <= this.radius)
					{
						
							this.speedX = - this.speedX * 1.1;
							this.speedY = - this.speedY * 1.1;
					}
				}
				
				this.hits++;
				if(this.hits != 0 && this.hits % 10 === 0)
				{
					this.radius = this.radius/4;
				}
			}
			else if((this.positionX > pad.currentX) && (this.positionX <= ( pad.currentX + this.canvas.width * (1/10))))
			{
				this.speedY = - this.speedY * 1.1;
				
				this.hits++;
				if(this.hits != 0 && this.hits % 10 === 0)
				{
					this.radius = this.radius/4;
				}
			}
		}
	}
	
	this.checkIfBallsCollidedToEachOther = function(balls){
		
		if(balls.length >= 2)
		{
			if(balls.length === 3)
			{
				if(typeof(balls[0]) != 'undefined' && typeof(balls[1]) != 'undefined')
				{
					if(calculateDistance(0, 1) <= addRadius(0, 1))
					{
						reverseDirection(0, 1);
					}
				}
				
				if(typeof(balls[0]) != 'undefined' && typeof(balls[2]) != 'undefined')
				{
					if(calculateDistance(0, 2) <= addRadius(0, 2))
					{
						reverseDirection(0, 2);
					}
				}
				
				if(typeof(balls[1]) != 'undefined' && typeof(balls[2]) != 'undefined')
				{
					if(calculateDistance(1, 2) <= addRadius(1, 2))
					{
					
						reverseDirection(1, 2);
					}
				}
			}
			else
			{
				if(typeof(balls[0]) != 'undefined' && typeof(balls[1]) != 'undefined')
				{
					if(calculateDistance(0, 1) <= addRadius(0, 1))
					{
						reverseDirection(0, 1);
					}
				}
			}
		}
	}
	
	var reverseDirection = function(i, j){
		
		balls[i].speedY = - balls[i].speedY;
		balls[i].speedX = - balls[i].speedX;
					
		balls[j].speedY = - balls[j].speedY;
		balls[j].speedX = - balls[j].speedX;
	}
	
	var calculateDistance = function(i, j){
		
		return Math.sqrt(Math.pow((balls[i].positionX - balls[j].positionX), 2) + Math.pow((balls[i].positionY - balls[j].positionY), 2));
	}
	
	var addRadius = function(i, j){
		return balls[i].radius + balls[j].radius;
	}
} 