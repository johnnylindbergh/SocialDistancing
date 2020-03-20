var b = 255;
var o = 0;
var num = 200;
var g1 = 2;
var g2 = 1;
var ballarray = [];
var socialRate = 0.5;
var numberOfinfected;
var infectedData = [];


function setup() {
  ellipseMode(RADIUS);
  frameRate(200);
  createCanvas(window.innerWidth, window.innerHeight-1);
background(0);
noCursor();


  //ballarray = new Ball[num];
  for(var i = 0; i < num; i++){
  ballarray.push(new Ball(i));    
  }    
 
  for(var i = 0; i < num; i++){
     ballarray[i].move();
     
     
    } 
      
  }
function draw() { 
  //fill(0,40);
  background(255);
  //rect(0,0,width,height);
  fill(0);
 
  var hole = 0;
  
 numberOfinfected = 0;
  for(var i = 0; i < num; i++){
     ballarray[i].move();
    if (ballarray[i].infected){
        numberOfinfected++;
     }
     
  
 }

 infectedData.push([millis()/1000.0, numberOfinfected]);
    

    
}
function Ball(f) {
var n;
var x;
var y;
var xd;
var yd;
var xspeed;
var yspeed;
var size;
var collisionPointX;
var collisionPointY;
var r  = 255;
var g  = 255;
var b  = 255;
var infected = false;
  this.c = 1;
  this.n = f;
  this.x = random(0,width);
  this.y = random(0,height);
  this.xd= random(-2,2)+1;
  this.yd = random(-2,2)+1;
this.xspeed = random(1,1); 
this.yspeed = random(1,1);
 this.size = random(3,4);

 if (f == num-1){
  this.infected = true;
 }




 this.move = function() {
   if (this.n > int(num*socialRate)){
   for(var i = 0; i < num; i++){


   
        
      
      
         
     
       this.collisionPointX = ((this.x * this.size) + (ballarray[i].x * ballarray[i].size)) / (this.size + ballarray[i].size);
       this.collisionPointY = ((this.y * this.size) + (ballarray[i].y * ballarray[i].size)) / (this.size + ballarray[i].size);
       noFill();
 
     if (   dist(this.x,this.y,ballarray[i].x,ballarray[i].y)  < this.size + ballarray[i].size) {
     if (i != this.n) {
       if (frameCount >1){

       var tempx = this.xspeed;
       var tempy = this.yspeed;
       
        this.xspeed = ballarray[i].xspeed;
        this.yspeed = ballarray[i].yspeed;
        
        ballarray[i].xspeed  = tempx;
        ballarray[i].yspeed  = tempy;

     this.xd = -1*this.collisionPointX+this.x;
     this.yd =-1*this.collisionPointY+this.y;

     if (ballarray[i].infected  || this.infected){
        ballarray[i].infected = true;
        this.infected = true;
     }
   }
     }
     }
     }
   
   
   if ((this.x+this.size) > width) {
    this.xd = this.xd*-1;
    
 }
 

    if ((this.x-this.size)  < 0){
    this.xd = this.xd*-1;
    
  }
   if (this.y+this.size > height) {
   
    this.yd = this.yd*-1;
 }
 
 if ((this.y-this.size) < 0){
   this.yd = this.yd*-1;
 }


if (this.x > (width/2)){
  if (this.x < (width/2)+1){
    if (int(this.y)%8 != 0){
      this.xd = this.xd*-1
    }
  }
}
  
   this.x += ( this.xspeed * this.xd );
  this.y += ( this.yspeed * this.yd );
    
 
   fill(255)
   stroke(0);
if (this.infected){
      fill(255,0,0);
   }
    ellipse(this.x,this.y,this.size,this.size);
   // line(this.x,this.y,0,0);
   //textSize(10);
   // fill(255,255,255);
     
    
   } else {
 fill(255)
    if (this.infected){
      fill(255,0,0);
   }
    ellipse(this.x,this.y,this.size,this.size);
   }

   
 }
 }


function setSocialRate(rate){
  socialRate = 1-(rate/1000.0);
}






 