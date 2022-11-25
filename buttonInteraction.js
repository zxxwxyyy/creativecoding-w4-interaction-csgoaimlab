// ----- functions for button interaction

// ----- enemies moving mode/in different speed. Using boolean to detect if enemies is moving is inspired from conversation w/ Prof. Cotter during office hour. 
// ----- Then I expand the idea for different moving mode. 
function moveEnemies(){
  isMoving = !isMoving
  isMovingMedium = false;
  isMovingHard = false;
  isMovingEasy = false;
}

function moveModeHard(){
  isMovingHard = !isMovingHard
  isMoving = false;
  isMovingEasy = false;
  isMovingMedium = false;
}

function moveModeMedium(){
  isMovingMedium = !isMovingMedium
  isMoving = false;
  isMovingHard = false;
  isMovingEasy = false;
}

function moveModeEasy(){
  isMovingEasy = !isMovingEasy
  isMoving = false;
  isMovingMedium = false;
  isMovingHard = false;
}

// ----- pause all enemies from moving by setting up all boolean to false. 
function pause(){
  isMovingEasy = false
  isMoving = false;
  isMovingMedium = false;
  isMovingHard = false;
}

// ----- create new enemies by using Array.push() learn from class. 
   function newEnemies(){
    for(let i = 0; i < 3; i++){
      enemiesArray.push(new Enemies(random(50, windowWidth- 50), random(150, windowHeight - 200), this.r)) 
      }
    
     
    for(let g = 0; g < 3; g++){
        sqenemiesArray.push(new Sqenemies(random(50, windowWidth- 50), random(150, windowHeight - 200), this.w, this.h))
      }

      isMovingEasy = false
      isMoving = false;
      isMovingMedium = false;
      isMovingHard = false;
  }

// ----- reset the map, using splice function to splice existing enemies them push new.
// ----- For resetting, I think it's best to splice out all existing enemies first, then push new ones. By resetting, set all boolean to false to pause previous moving. 
  function reSet(){
    for(let i = 0; i < 30; i++){
      enemiesArray.splice(i, 20)
      enemiesArray.push(new Enemies(random(50, windowWidth- 50), random(150, windowHeight - 200), this.r)) 
    }
    for(let g = 0; g < 20; g++){
      sqenemiesArray.splice(g, 15)
      sqenemiesArray.push(new Sqenemies(random(50, windowWidth- 50), random(150, windowHeight - 200), this.w, this.h))
    }
    isMovingEasy = false
    isMoving = false;
    isMovingMedium = false;
    isMovingHard = false;
  }
  
  
