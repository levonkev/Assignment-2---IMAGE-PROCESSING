var img;
var processing;
var count = 15000; //amount of lines
var rPoints = new Array(count);
//var canvasp;
var gui;
var sliderImpetus = 0.25;

function preload(){
  img = loadImage('assets/example2.jpg', (img) => {img.loadPixels();});
  //load image, load pixels from image
}



function projectg() {

  this.setup = function(){
    gui = createGui();
    sliderSpeed = createSlider("IMPETUS", 10, 950, 100, 20, 0.1, 1);
    sliderSpeed.val = sliderImpetus;
    gui.loadStyle("Gray");
    // drawGui();
    }



 // createCanvas(1000, 1000);
 // background(0, 10);
  processing = new ParticleSystem({pcount: count});

  
  // //position image middle
  //  var imgposX = (windowWidth - 1000)/2;
  //  var imgposY = (windowHeight - 1000)/2;
  //  canvasp.position(imgposX, imgposY);

   this.draw = function(){
    
    drawGui();
     sliderImpetus = sliderSpeed.val;
     processing.update(sliderImpetus); //control speed of particles

     fill(0, 130); //fill screen colour, change number of various effects 0 for black
     noStroke();
     rect(0,0, 1000, 1000);
    

     processing.draw();
     rPoints.sort(function(a,b){
       return b.c - a.c;
     });

     strokeWeight(1); //change weight for visual effect
     for(var i = 0; i < rPoints.length; i++){ 
       stroke(rPoints[i].c,80); //change last number of constrast
       line(rPoints[i].lx, rPoints[i].ly, rPoints[i].x, rPoints[i].y);
      
     }
    }

   }



