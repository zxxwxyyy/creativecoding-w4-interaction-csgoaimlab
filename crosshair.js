function createCrosshair(){
// -----drawing Crosshair and arm, image & crosshair moves by following mouseX and mouseY.
  image(arm, mouseX - 210, windowHeight - 700, 700, 700)
  fill(255)
  rect(mouseX + 8, mouseY, 10, 4)
  rect(mouseX, mouseY + 8, 4, 10)
  rect(mouseX - 8, mouseY, 10, 4)
  rect(mouseX, mouseY - 8, 4, 10)
}
