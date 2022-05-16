function mainmenu()
{
this.setup = function()
{
  //Mainmenu();
  if (this.keyCode === ENTER){
    this.sceneManager.showScene(projectg);
 
   }
 
}
this.draw = function()
{
  createCanvas(1000, 1000);
  background(31, 32, 41);
  textFont("Helvetica");
  textSize(20);
  stroke(0);
  fill(150);
  textAlign(CENTER, CENTER); 
 text(
    "IMAGE PROCESSING",
    width / 2,
    height / 2
  );
  textSize(12.5);
  text("Press ENTER to start", width / 2, height / 1.8);

  // function keyPressed()
  // {
   
  // }
}

this.keyPressed = function()
 {
  if (keyCode === ENTER) {
  this.sceneManager.showScene(projectg);
 // this.handleEvent("keyPressed"); //dispatch via SceneManager
  }

}


}