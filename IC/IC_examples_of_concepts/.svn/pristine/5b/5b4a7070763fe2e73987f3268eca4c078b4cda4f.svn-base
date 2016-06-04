var canvasHeight = 400;
var shipOrigin = 20;
var shipPosition = shipOrigin;

var shipHeightOrigin = function() {
  return Math.floor(Math.random() * canvasHeight, canvasHeight);
}

var shipHeight = shipHeightOrigin();
var shipDownDisplacement = 1;
var shipRadius = 20;
var shipDisplacement = 2;
var turretBase = 30;
var turretTower = 10;
var bulletOrigin = 0;
var bulletPosition = -100;
var bulletDisplacement = 5;
var shipHit = false;
var canvas;

var drawTurret = function(context, center) {
  context.fillStyle = 'black';
  context.fillRect(center.x - 15, canvas.height - 15, turretBase, turretBase);  
  context.fillStyle = 'red';
  context.fillRect(center.x - 5, canvas.height - 25, turretTower, turretTower);    
}

var drawSpaceShip = function(context, center) {
  context.save();
  context.scale(0.5, 0.25);
  context.lineWidth = 10;
  context.strokeStyle = 'gray';
  context.fillStyle = 'gray';
  if(shipHit) context.fillStyle = 'red';
  context.arc(2 * shipPosition, 4 * shipHeight, shipRadius, 0, 2 * Math.PI, false);
  context.fill();
  context.restore();

  if(shipHit) {
    shipHeight += shipDownDisplacement;
    bulletPosition = -100;
  }

  if(shipPosition > canvas.width) {
    shipPosition = shipOrigin;
    shipHit = false;
    shipHeight = shipHeightOrigin();
  } else {
    shipPosition += shipDisplacement;
  }
  
  if(shipHeight > center.y) {
    shipHit = false;
    shipHeight = shipHeightOrigin();
    shipPosition = shipOrigin;
  }
}

var drawWeapon = function(context, center) {
  if(bulletPosition == bulletOrigin) {
    bulletPosition = 2 * center.y - turretBase - turretTower + 10;
  }
  
  if(bulletPosition > bulletOrigin) {
    bulletPosition -= bulletDisplacement;
  } 
  
  if(bulletPosition <= 10) {
    bulletPosition = -100;
  }
  
  context.save();
  context.lineWidth = 10;
  context.strokeStyle = 'brown';
  context.fillStyle = 'brown';
  context.fillRect(center.x - 2, bulletPosition - 10, 4, 15);
  context.restore();
  context.save();
  context.closePath();
  context.beginPath();
  context.fillStyle = 'red';
  context.arc(center.x, bulletPosition - 10, 2, 0, Math.PI, true);
  context.fill();
  context.restore();
}

var checkIfHit = function(context, center) {
  var bulletAt = bulletPosition - 10;
  
  if(shipPosition > center.x - shipRadius && 
    shipPosition < center.x + shipRadius &&
    bulletAt < shipHeight + shipRadius &&
    bulletAt > shipHeight - shipRadius) {
      shipHit = true;
    }
}

var drawField = function() {
  var center = {x: canvas.width/2, y: canvas.height/2};

  var context = canvas.getContext('2d');

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = 'yellow';
  context.fillRect(0, 0, canvas.width, canvas.height);  
  
  context.beginPath();    
  
  drawTurret(context, center);

  drawSpaceShip(context, center);
  
  drawWeapon(context, center);
  
  checkIfHit(context, center);
  
  context.stroke();
  
  setTimeout("drawField();", 10);
}

var draw = function(theCanvas) {
  canvas = theCanvas;
  drawField();
}

var fire = function() {
  bulletPosition = bulletOrigin;
}
