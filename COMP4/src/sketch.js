var mgr;

function setup() {
  createCanvas(1000, 1000);
  mgr = new SceneManager();
  mgr.wire();
  mgr.addScene(mainmenu);
  mgr.addScene(projectg);

  mgr.showNextScene();
}

function draw(){
mgr.draw();
}

function mousePressed()
{
    mgr.handleEvent("mousePressed"); //passes the mouse event into the scene manager so it can be used inside the scenes!
}


// function keyPressed()
//  {
//   if (keyCode === ENTER) {
//   mgr.showScene(project);
//   mgr.handleEvent("keyPressed"); //dispatch via SceneManager
//   }

//  }

