var trufC= 750; //for chocolate truffle in draw function
var trufW = 500; //for white chocolate truffle in draw function
var trufD = 250; //for dark chocolate truffle in draw function
var move = true
var easing = 0.01;

function setup() {
	createCanvas(1375,750);
	background(200, 45, 230, 75);
	
//CANDYYY!!!
	//chocolate truffles
	stroke(51, 25, 0);
	fill(51, 25, 0);
	for(var x = 0; x <= width; x += 100) {
		for (var y = 0; y <= height; y += 100) {
			arc(x + 40, y + 40, 75, 100,  PI, 0);
			strokeWeight(2);
			stroke(0);
			arc(x+40, y+10, 35, 5, 0, PI);
		}
	}
	//white chocolate truffles
	stroke(255, 229, 204);
	fill(255, 229, 204);
	for(var x = 30; x <= width; x += 100) {
		for (var y = 50; y <= height; y += 100) {
			arc(x + 40, y + 40, 75, 100,  PI, 0);
			strokeWeight(2);
			stroke(204);
			arc(x+40, y+10, 35, 5, 0, PI);
		}
	}
	//dark chocolate truffles
	stroke(0);
	fill(0);
	for(var x = -15; x <= width; x += 100) {
		for (var y = 25; y <= height; y += 100) {
			arc(x + 40, y + 40, 75, 100,  PI, 0);
			strokeWeight(2);
			stroke(51, 0, 0);
			arc(x + 40, y + 10, 35, 5, 0, PI);
		}
	}
//Remote to control conveyer belt
	//Remote
	stroke(0);
	fill(45);
	quad(1170, 469, 1374, 469, 1374, 749, 1170, 749);
	fill(30);
	quad(1170, 469, 1235, 439, 1384, 439, 1374, 469);
	fill(45);
	rect(1300, 365, 10, 90, 30);
	ellipse(1305, 365, 30, 30);
	//Button on remote
	stroke(0);
	fill(245, 0, 0, 200);
	ellipse(1292, 609, 100, 125);
	//Shadow on button for dimension
	stroke(190, 0, 0);
	strokeWeight(10);
	noFill();
	arc(1292, 625, 78, 70, 0, PI);
}

function draw() {	
//Conveyer Belt
	//Base
	stroke(45);
	fill(45);
	quad(587.5, 0, 787.5, 0, 987.5, height, 387.5, height);
	//outline
	stroke(0);
	strokeWeight(15);
	line(587.5, 0, 387.5, height);
	line(787.5, 0, 987.5, height);
	//stripes across the conveyer belt for dimension
	stroke(0);
	strokeWeight(10);
	line(410, 675, 965, 675);
	strokeWeight(9);
	line(430, 600, 945, 600);
	strokeWeight(8);
	line(450, 525, 925, 525);
	strokeWeight(7);
	line(470, 450, 905, 450);
	strokeWeight(6);
	line(490, 375, 885, 375);
	strokeWeight(5);
	line(510, 300, 865, 300);
	strokeWeight(4);
	line(530, 225, 845, 225);
	strokeWeight(3);
	line(550, 150, 825, 150);
	strokeWeight(2);
	line(570, 75, 805, 75);
	strokeWeight(1);
	line(590, 0, 785, 0);

//Moving things!!! (when mouse is clicked)
	//Moving truffles to give the ILLUSION of a moving conveyer belt :)
	
	if(mouseIsPressed == true && (mouseX > 1250 && mouseX < 1347) && (mouseY > 563 && mouseY < 667)) {
		if (trufC > 750) {
			move = false;
		}
		if (trufC < 0) {
			move = true;
		}
		if (move) {
			trufC -= 45 * easing;
			trufW -= 45 * easing;
			trufD -= 45 * easing;
		}
		else {	
			trufC += 45 * easing;
			trufW += 45 * easing;
			trufD += 45 * easing;
		}
			//chocolate truffle
			stroke(0);
			fill(51, 25, 0);
			arc(687.5, trufC, 175, 250,  PI, 0);
			strokeWeight(2);
			stroke(0);
			arc(687.5, trufC - 90, 80, 15, 0, PI);
			arc(687.5, trufC, 175, 45, 0, PI); //round out the truffle because it's closer to the viewer
		
			//white chocolate truffle
			stroke(204);
			fill(255, 229, 204);
			arc(687.5, trufW, 117, 170,  PI, 0);
			strokeWeight(2);
			stroke(204);
			arc(687.5, trufW - 60, 60, 17, 0, PI);
			arc(687.5, trufW, 117, 45, 0, PI);
		
			//dark chocolate truffle
			stroke(51, 0, 0);
			fill(0);
			arc(687.5, trufD, 67, 90,  PI, 0);
			strokeWeight(2);
			stroke(51, 0, 0);
			arc(687.5, trufD - 30, 35, 15, 0, PI);
			arc(687.5, trufD, 67, 35, 0, PI);
	}
	//truffle movement must be embedded in mouseIsPressed function with an else to ensure that the truffles only move when the mouse is pressed, and that they don't disappear when the mouse button is released (else block following)
	else {
		if (trufC > 750) {
			move = false;
		}
		if (trufC < 0) {
			move = true;
		}
		if (move) {
			trufC = trufC;
			trufW = trufW;
			trufD = trufD;
		}
		else {	
			trufC -= 45 * easing;
			trufW -= 45 * easing;
			trufD -= 45 * easing;
		}
		//chocolate truffle
		stroke(0);
		fill(51, 25, 0);
		arc(687.5, trufC, 175, 250,  PI, 0);
		strokeWeight(2);
		stroke(0);
		arc(687.5, trufC - 90, 80, 15, 0, PI);
		arc(687.5, trufC, 175, 45, 0, PI); //round out the truffle because it's closer to the viewer
		
		//white chocolate truffle
		stroke(204);
		fill(255, 229, 204);
		arc(687.5, trufW, 117, 170,  PI, 0);
		strokeWeight(2);
		stroke(204);
		arc(687.5, trufW - 60, 60, 17, 0, PI);
		arc(687.5, trufW, 117, 45, 0, PI);
		
		//dark chocolate truffle
		stroke(51, 0, 0);
		fill(0);
		arc(687.5, trufD, 67, 90,  PI, 0);
		strokeWeight(2);
		stroke(51, 0, 0);
		arc(687.5, trufD - 30, 35, 15, 0, PI);
		arc(687.5, trufD, 67, 35, 0, PI);
	}
}
