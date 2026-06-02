var startx=40;  //starting x
var dx=80;     //spacing before next x
var c=8;    //number of columns
var endx;    //will be calculated in setup

var starty=40;  //starting y
var dy=80;      //spacing before next y
var r;      //number of rows is a trivial variable because
               //the grid populates L -> R



function setup(){
  var x;
  var y;
  
  endx=(c)*dx;
  createCanvas(1000,600);
  background(129,30,70);
  
  for(var n=0; n<29; n++){
    x=startx + ((n*dx) % endx);
    y=starty + dy*floor(n/c);
    console.log(n,x,y);
    fill(255);
    rect(x,y,78,78,9);  //could be anything, this proves rows and columns are correctly spaced
  }
  }




function draw(){

  
  }




function touchStarted(){
  
  
}


function touchEnded(){
  
  
}



  






