var circleYPos = 0;
var circleXPos;
var circles = []

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	background(0);

	circleXPos = width / 2;

	for (var i = 0; i < 200; i++){
		c = new Circle(i * 7, 
			0, 
			random(0, 100),
			random(20, 150), 
			random(20, 150),
			random(10, 50),
			random(1, 10)
		);
		circles.push(c);
	}
}

function draw() {
	background(0, 30);
	circles.forEach(function(circle){
		circle.render();
		circle.move();
		circle.bounce();
	});
}

function Circle(x, y, r, g, b, radius, speed) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.g = g;
	this.b = b;
	this.speed = speed;

	this.radius = radius;

	this.render = function(){
		stroke(this.r, this.g, this.b)
		fill(this.r, this.g, this.b);
		ellipse(
			this.x,
			this.y,
			this.radius,
			this.radius
			);
		}

	this.move = function() {
		this.y += this.speed;
	}
	
	this.bounce = function() {
		if (this.y >= height || this.y <= 0) {
			this.speed *= -1
		}
	}

}
