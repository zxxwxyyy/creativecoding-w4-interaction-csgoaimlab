// Liqian Zhang
// Creative Coding W4 Interaction - creating CSGO aiming map
// references: Creative coding w3, w4 class demo
// references: The Coding Train tutorial 7.6, 7.7, 7.8
// https://www.youtube.com/watch?v=W1-ej3Wu5zg&t=63s&ab_channel=TheCodingTrain
// https://www.youtube.com/watch?v=5Q9cA0REztY&t=5s&ab_channel=TheCodingTrain
// https://www.youtube.com/watch?v=i2C1hrJMwz0&ab_channel=TheCodingTrain
// background image & arm image from in game screenshot

let crosshairArray = []
let enemiesArray = []
let enemies = []
let shapeArray = []
let sqenemiesArray = []
let button;
let button1;
let button2;
let button3;
let button4;
let button5;
let button6;
let arm;
let map;
let isMoving = false;
let isMovingHard = false;
let isMovingMedium = false;
let isMovingEasy = false;

// ----- loading map, arm
function preload(){
  arm = loadImage('images/arm.png')
  map = loadImage('images/background.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // ----- randomly create 2 different shapes of enemies
  for(let i = 0; i < 30; i++){
    enemiesArray.push(new Enemies(random(50, windowWidth- 50), random(150, windowHeight - 200), this.r)) 
  }
  for(let g = 0; g < 20; g++){
    sqenemiesArray.push(new Sqenemies(random(50, windowWidth- 50), random(150, windowHeight - 200), this.w, this.h))
  }
  
  // ----- setting up buttons
  // references: https://p5js.org/reference/#/p5/createButton
  // ----- create moving buttons, click button to let enemies move; hide different mode's buttons until click 'move' button. 
  button = createButton('move')
  button.style('font-size', '25px')
  button.size(100,50)
  button.mousePressed(moveEnemies);
  button.position(windowWidth - 200, windowHeight - 490)


  // ----- create buttons for moving difficulties 
  button3 = createButton('hard')
  button3.style('font-size', '25px')
  button3.size(100,50)
  button3.mousePressed(moveModeHard);
  button3.position(windowWidth - 200, windowHeight - 300)
  button3.hide()

  button4 = createButton('medium')
  button4.mousePressed(moveModeMedium);
  button4.style('font-size', '25px')
  button4.size(100,50)
  button4.position(windowWidth - 200, windowHeight - 350)
  button4.hide()

  button5 = createButton('easy')
  button5.mousePressed(moveModeEasy);
  button5.style('font-size', '25px')
  button5.size(100,50)
  button5.position(windowWidth - 200, windowHeight - 400)
  button5.hide()

  // ----- click button to add new enemies
  button1 = createButton('new enemies');
  button1.style('font-size', '22px')
  button1.size(150,50)
  button1.mousePressed(newEnemies);
  button1.position(80, windowHeight - 450)
  
  // ----- click button to reset scene
  button2 = createButton('reset');
  button2.mouseClicked(reSet);
  button2.position(80, windowHeight - 380)
  button2.style('font-size', '22px')
  button2.size(150,50)
}



function draw() {
  background(200);
  // ----- drawing background map
  rectMode(CENTER)
  image(map, 0, 0, windowWidth, windowHeight)

  // ----- when clicking 'move' button, show difficulties and pause button. 
  // references: https://www.youtube.com/watch?v=YcezEwOXun4&t=261s&ab_channel=TheCodingTrain
  // references: https://p5js.org/reference/#/p5.Element/hide; https://p5js.org/reference/#/p5.Element/show
  if(isMoving || isMovingEasy || isMovingMedium || isMovingHard){
    button.html('pause')
    button.mousePressed(pause);
    button3.show()
    button4.show()
    button5.show()

  } else {
    button.html('move')
    button.mousePressed(moveEnemies);
    button3.hide()
    button4.hide()
    button5.hide()

  }


  // ----- create enemies; and if the mouse is pressed, using boolean to control the enemies' movement. Also for different mode. 
  for(let i = 0; i < enemiesArray.length; i++){
    enemiesArray[i].display()
    if(isMoving){
    enemiesArray[i].move()
    
    }else if(isMovingHard){
        enemiesArray[i].moveHard()
          }   
      
    else if(isMovingMedium){
        enemiesArray[i].moveMedium()
    }

    else if(isMovingEasy){
        enemiesArray[i].moveEasy()
        }
      }
  

  for(let g = 0; g < sqenemiesArray.length; g++){
    sqenemiesArray[g].display()
    if(isMoving){
      sqenemiesArray[g].move()
      }
    else if(isMovingHard){
        sqenemiesArray[g].moveHard()
          }   
      
    else if(isMovingMedium){
        sqenemiesArray[g].moveMedium()
    }

    else if(isMovingEasy){
        sqenemiesArray[g].moveEasy()
        }
      }
    
  createCrosshair()

}

