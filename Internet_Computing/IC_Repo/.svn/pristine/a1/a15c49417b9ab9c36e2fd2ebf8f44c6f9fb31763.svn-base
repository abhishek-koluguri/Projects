var box;
var pad;
var ball;
var balls = [];
var context;
var center;
var canvas;
var radius;
var speed;
var ballSet = false;
var ballsLeft = 3;
var intervalID;
var countUPIntervalID;
  
var init =  function(theCanvas)
{
	canvas = theCanvas;
	
	center = {
		
		x: canvas.width / 2,
		y: canvas.height / 2
	};
	
	context = canvas.getContext('2d');
	radius = (canvas.width/10)/2;
	speed = (canvas.width/100);

	box = new Box();
	pad = new Pad();
	ball = new Balls();
	
	pad.setValues(center, canvas, context, pad);
	pad.setPad();
	canvas.addEventListener("mousemove", pad.trackPosition, true);
	
	intervalID = setInterval(reDraw, 50);
	
}

var reDraw = function() {
  	
	checkIfGameLost();
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.beginPath();
  
	box.drawBox(center, canvas, context);
	pad.drawPad();
	
	if(balls.length != 0)
	{
		
		ball.checkIfBallsCollidedToEachOther(balls);
		for(var i = 0; i < balls.length; i++)
		{
			if(typeof(balls[i]) != 'undefined')
				balls[i].moveBalls(pad, balls, i);
		}
	}
}

setOffBalls = function(mouseEvent)
{
	if(!ballSet)
	{
		countUPIntervalID = setInterval(countUP, 1000 );
			
		var randomDirection = Math.random() < 0.5 ? -1 : 1;
		
		red = new Balls();
		balls.push(red);
		red.setValues(radius, speed*randomDirection, context, canvas, center, 'red');
		red.drawBall(center.x - radius, center.y, radius, context, 'red');
	
		randomDirection = Math.random() < 0.5 ? -1 : 1;
					
		blue = new Balls();
		balls.push(blue);
		blue.setValues(radius, speed*randomDirection, context, canvas, center, 'blue');
		blue.drawBall(center.x + 5 * radius, center.y, radius, context, 'blue');

		randomDirection = Math.random() < 0.5 ? -1 : 1;		
								
		green = new Balls();
		balls.push(green);
		green.setValues(radius, speed*randomDirection, context, canvas, center, 'green');
		green.drawBall(center.x - 8*radius, center.y + 2*radius, radius, context, 'green');

		ballSet = true;
	}	
}

var checkIfGameLost = function(){

	if(ballsLeft === 0)
	{
		clearInterval(intervalID);
		clearInterval(countUPIntervalID);
		document.getElementById("gameOver").innerHTML = "GAME OVER...!!!";
	}
}

var createMouseHandler = function() {
    
  return setOffBalls;
}

this.createMouseHandlerForPad = function(){
		
	return pad.movePad;
}