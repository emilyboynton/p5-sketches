var circles = []

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	background(random(125, 255), random(125, 255), random(125, 255));
	c = new Circle (
		mouseX, 
		mouseY, 
		random(125, 255),  
		random(125, 255),  
		random(125, 255), 
		10, 
		1.015
	);
	
	circles.push(c);

}

function draw() {

	circles.forEach(function(circle){
		circle.render();
		circle.move();
		if (circle.flag) {
			circle.grow()
		}
		if (!circle.flag) {
			circle.shrink();
		}

	});
}

function mousePressed() {

	background(random(125, 255), random(125, 255), random(125, 255));
	circles.pop(c);
	c = new Circle (
		mouseX, 
		mouseY, 
		random(125, 255),  
		random(125, 255),  
		random(125, 255), 
		10, 
		1.015
	);
	
	circles.push(c);

}

function Circle(x, y, r, g, b, radius, rate) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.g = g;
	this.b = b;

	this.radius = radius;
	this.rate = 1.015;

	this.flag = true;

	this.render = function() {
		stroke(0);
		fill(this.r, this.g, this.b);
		ellipse(
			this.x,
			this.y,
			this.radius,
			this.radius
		);

	}

	this.move = function() {
		this.y = mouseY;
		this.x = mouseX;
	
	}

	this.grow = function() {
		this.radius *= this.rate;
		if (this.radius >= width / 10) {
			this.flag = false;
		}
	}

	this.shrink = function() {
		this.radius /= this.rate;
		if (this.radius <= 10) {
			this.flag = true;
		}
	}

}

