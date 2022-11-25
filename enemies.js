class Enemies{
    constructor(x, y, r){
        this.x = x
        this.y = y
        this.r = random(10, 15)
        this.xspeed = random(1, -1)
        this.yspeed = random(1, -1)
        // this.xspeed = 0
        // this.yspeed = 0
    }

    display(){
        noStroke();
        ellipseMode(CENTER)
        fill(255, 0, 111)
        ellipse(this.x, this.y, this.r * 2)
        // image(enemies[1], this.x, this.y, this.r * 2)

    }
    
// ----- Using contains() function and boolean to detect if crosshair is inside the enemies. 
    contains(px, py){
        let d = dist(mouseX, mouseY, this.x, this.y);
        if(d < this.r){
            return true;
        }else{
            return false;
        }
    }

    // ----- limit the movement of the enemies, if enemies position reach to the boundary, then xspeed = -xspeed. Same for different mode. 
    //reference: https://www.youtube.com/watch?v=xkIzsoNkHyA&ab_channel=NIRUPAMTECH
    move(){
        if(this.x >= windowWidth - 10 || this.x <= 10){
            this.xspeed = -this.xspeed
        }
        this.x += this.xspeed 
        this.y == this.yspeed
    }

    moveEasy(){
        if(this.x >= windowWidth - 10 || this.x <= 10){
            this.xspeed = -this.xspeed
        }
        this.x += this.xspeed 
        this.y == this.yspeed
    }

    moveMedium(){
        if(this.x >= windowWidth - 20 || this.x <= 20){
            this.xspeed = -this.xspeed
        }
        this.x += this.xspeed * 5
        this.y == this.yspeed
    }

    moveHard(){
        if(this.x >= windowWidth - 20 || this.x <= 20){
            this.xspeed = -this.xspeed
        }
        this.x += this.xspeed * 8
        this.y == this.yspeed
    }
}
