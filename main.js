function preload(){
}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(500, 300);
    video = createCapture(VIDEO);
    video.hide();
  
  }
  
  function draw() {
    background("orange");
    image(video,50,60,550,370);  
    fill('maroon');
    stroke('lightgreen');

    circle(50, 50, 80);  
    circle(50, 430, 80);  
    circle(590, 50, 80);  
    circle(590, 430, 80);
    
    fill('darkgreen');
    stroke('lightgreen');

    rect(90, 40, 460, 20);  
    rect(90, 420, 460, 20);  
    rect(40, 90, 20, 300);  
    rect(580, 90, 20, 300);
  
   
  }
  
  function take_snapshot(){    
    save('birthdaypic.png');
  }