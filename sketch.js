let bigSquare, background1, background2, backgroundSquare, bigRectangles, smallRect1, mySound, play, button, tri, bgs; //bgs backgrounds
let on = false; //music is playing (toggle)
const Y_AXIS = 1;
const X_AXIS = 2;
let num = 0;
let move =1 ;
let songTime;
let b1, b2, c1, c2, co1, co2, htmlText, htmlText2, bwSwitch;

function preload() {
 mySound = loadSound('https://res.cloudinary.com/dvwvkt7iq/video/upload/v1580275678/sambat_house_2019_shortened_dz1q2o.mp3');
}

function setup() {
  b1 = color(255);
  b2 = color(0);
  htmlText = createA('http://natekodi.com','nath.', '_blank')
  htmlText2 = createA('http://natekodi.com','<3')
  createCanvas(720, 480);
  colorMode(RGB);
	angleMode(DEGREES);
  mySound.setVolume(0.7);
}

function draw() {
  background(10);
  
  songTime = mySound.currentTime();
	
  class BigSquare { 
    constructor(x,y,w,h){
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }
    position(r,g,b, sbR, sbB, sbG){
      push();
      strokeWeight(6);
      stroke(r, g, b,);
      fill(sbR, sbB, sbG); //(89, 33, 38)
      rect(this.x, this.y, this.w, this.h);   
      pop();
    }
  }
	
	class Backgrounds{
		constructor(x,w,r,g,b){
			this.x = x;
			// this.y = y;
			this.w = w;
			// this.h = h;
			this.r = r;
			this.g = g;
			this.b = b;
			this.stroke = true;
		}
		position(){
			fill(this.r,this.g,this.b);
			if(this.stroke){
				stroke(100);
				strokeWeight(5);
			}
			rect(this.x,0, this.w,windowHeight);	
		}
		strokeOption(){
			stroke(247, 56, 88);
		}
	}
	
//make smaller rectangles
  function colorToggle(color,s,b){
    if(color === 0){
      return 0
    }
    else{
    return color + s + b
    
    }
  
  }

class smallRect{ //three black rectangles, rotated at two different angles
	constructor(x,y, angle){
		this.x = x;
		this.y = y;
		this.angle = angle;
        this.map = map(mouseY, 0, height, 1, 254)
        this.c1 = fill(255);//white
        this.c2 = fill(0);//black
        this.co1 = fill(this.map,157,96); //light orange
        this.co2 = fill(255,107,15); //dark orange
        this.w = width;
        this.h = height;
        this.Y_AXIS = 1;
        this.X_AXIS = 2;
        this.num =10;
        this.move = 1
        
	}
  
  moveBackAndForth(){
  // console.log(this.y)
  //       rect(10, num, 100, 100)
      num+=move
    if(num > 100)
       move = -1
    else if(num < -0){
      move = 1 
    }
    
  
  }
  
  changeColor(){
  
   this.color = fill(this.map,157,96)
    //make the color change on the y axis
    //make a map for it
    
  
  }
  
	position(colors,r,g,b){
                push();
                strokeWeight(6);
                stroke(r,g,b);
                fill(colors);
                translate(0,0)
                rotate(this.angle)
                rect(this.x,this.y, 100, 300);
                pop();
	}
}
  
    bigSquare = new BigSquare( 450, 280, 130, 130); //red square w450 h280
    backgroundSquare = new Backgrounds(0,400, 247, 56, 88); //red background
    backgrounds = new Backgrounds(380,400,122, 199, 196); //blue background
    rect1 = new BigSquare();
	backgrounds.position()
	bgs = backgroundSquare.position();
    push();
	// bigSquare.position()
    pop();
    smallRect1 = new smallRect(250,num-110, 0);
    push();
    translate(0, 0);
	smallRect1.position(0, 170, 3, 82);
    pop();
  
let smallRect2 = new smallRect(140, num+20, 50); //50 degrees
  push()
  
  smallRect2.position(0, 170, 3, 82);
  pop()
  
let smallRect3 = new smallRect(340, num+20, 50 )
  push();
  smallRect3.position(0, 170, 3, 82);
  pop();
  
  function htmlTextPosition(blackOrWhite){
    htmlText.position(640,450)
    htmlText.style('color', blackOrWhite)
    htmlText.style('text-decoration', 'none')
    htmlText.style('display', 'inline')
    htmlText2.style('display', 'none')
  }
  
  htmlTextPosition("black")

  tri = function triangl(){  
  push();
  strokeWeight(3);
  stroke(169, 7, 84);
  fill(89, 33, 38);
  translate(615,218);
  scale(2.2);
  rotate(90);
  triangle(30, 75, 58, 20, 86, 75)
  pop();
  }
  
if(on && songTime >= 0){ //if on is true place the stop button
  clear()
    colorPallet(248, 53, 90, 122, 199, 196, 170, 3, 82, 89, 33, 38, 295,108,0 , 'black')
    console.log(Math.floor(songTime))
    htmlTextPosition("black")
  //events happening over time
    if (songTime >= 8.276){ //green pink
      clear()
      colorPallet(3, 142, 113, 243, 166, 170, 3, 87, 27, 3, 57, 52, 37, 213, 0, 'black')
      htmlTextPosition("black")
    }
    
    if(songTime >= 24.828){ 
    clear();
    colorPallet(255, 112, 145, 10, 90, 86, 255, 169, 243, 255, 198, 203, 252, 225, 227, 'white')
      htmlTextPosition("white")
    
    }
    
    if(songTime >= 41.379){ //purple green
    clear();
    colorPallet(101, 186, 62, 104, 59, 122, 209, 222, 104, 190, 221, 174, 190, 221, 174, 'white')
    }
        if(songTime >= 57.931){ //blue beige
    clear();
    colorPallet(8, 121, 200, 218, 177, 138, 3, 76, 98, 17, 50, 79, 255, 133, 112, 'black')
          htmlTextPosition("black")
    }
          if(songTime >= 74.3){
    clear();
    colorPallet(228, 66, 41, 133, 193, 217, 174, 4, 32, 82, 35, 22, 255, 133, 112, 'black')
    htmlText.style('display', 'none')
    htmlText2.position(640,450)
    htmlText2.style('display', 'inline')
    htmlText2.style('color', 'black')
    htmlText2.style('text-decoration', 'none')
    }
}
  
  else{ //if its not true place the play button
   tri()//play button
    htmlTextPosition("black")
  }

  
function colorPallet(bgc1R, bgc1G, bgc1B, bg2R, bc2G, bc2B, stR, stG, stB, sbR, sbB, sbG, grR, grG, grB, blackOrWhite){
  //bgc = left background color
  //bg2 =  right background color
  //st = stroke color
  //sb = stop button
  //gr = gradient
  // black or white takes a string 'black' or 'white'
  co1 = color(0);
  co2 = color(grR,grG,grB, 0.8) //295,108,0,
  
  function zeroOrOne(colorString){
    if(colorString === 'black'){
      return co1
    }
    else if(colorString === 'white'){
      return color('white')
    }
  
  } 
  
  bwSwitch = zeroOrOne(blackOrWhite)
  //bgcolor left is
  let bgc1 = new Backgrounds(0,400, bgc1R, bgc1G, bgc1B);
  bgc1.position()
  
  let bgc2 = new Backgrounds(400,500, bg2R, bc2G, bc2B);
  bgc2.position()
  
  bigSquare.position(stR, stG, stB, sbR, sbB, sbG);//stop button
  

    //putting a rect on top of current rect
    // backgroundSquare.position(); //new background square layer
    noFill()
    //colorcombo 1
    //gradient color1
    setGradient(250, num-120, 100, 310, bwSwitch, co2, Y_AXIS); 
    smallRect1.position(color('rgba(0,0,0,0.5)'), stR, stG, stB);
    smallRect1.moveBackAndForth();
    // translate and rotate on smallrect2 and 3
    push()
    translate(0,0)
    rotate(50)
    setGradient(140, num+20, 100, 310, co2, bwSwitch, Y_AXIS); //gradient color 2
    pop()
    smallRect2.position(color('rgba(0,0,0,0.5)'),stR, stG, stB); //color
    smallRect2.moveBackAndForth();
  
    push()
    translate(0,0)
    rotate(50)
    setGradient(340, num+20, 100, 310, co2, bwSwitch, Y_AXIS);//gradient color 3
    pop()
    
    smallRect3.position(color('rgba(0,0,0,0.5)'),stR, stG, stB);
    smallRect3.moveBackAndForth();
    // let innerSmallRect1 = new smallRect(250,-110, 0);
    // innerSmallRect1.changeColor()
    // innerSmallRect1.position(200)
  }
  
}



function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  let mouseXMap = map(mouseX, width, height,0.3,0.8) //makes mousex equal to the gradient of lerpcolor
  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, mouseXMap);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

  function mousePressed(){
      if( mouseX > bigSquare.x && mouseX < bigSquare.x + 130 && mouseY > bigSquare.y && mouseY < bigSquare.y + 130 ) { //if the mouse is position is between the coordinates. BigSquare(450,280,130, 130)
        on = !on;   
        ;
  }
  if(on && mouseX > bigSquare.x && mouseX < bigSquare.x + 130 && mouseY > bigSquare.y && mouseY < bigSquare.y + 130 ){
            mySound.play();
    console.log("playing")
            }
    
    else if(!on) {
      console.log('stopped')
      
      mySound.stop();
    }
    else{
    console.log('press the stop button instead')
    }
  }