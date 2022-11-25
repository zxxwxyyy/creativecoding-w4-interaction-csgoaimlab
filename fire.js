// ----- fire！and eliminate terrorists, dectect if crosshair is on the enemies by using contains(); if yes, splice the enemies. 
  function mousePressed() {
    for (let i = enemiesArray.length - 1; i >= 0; i--) {
      if (enemiesArray[i].contains(mouseX, mouseY)) {
        enemiesArray.splice(i, 1);
      }
    }
    for (let g = sqenemiesArray.length - 1; g >= 0; g--) {
      if (sqenemiesArray[g].contains(mouseX, mouseY)) {
        sqenemiesArray.splice(g, 1);
      }
    }
  }
