'use strict';
// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    // Randomized speed
    this.speed = speed + Math.floor(Math.random() * 250);;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x = this.x + this.speed * dt;

    // Update enemy location
    if (this.x > 500) {
        this.x = -85;
        this.speed = 150 + Math.floor(Math.random() * 250);
    }

    // Handle collision with player
    if (player.x < this.x + 70 && player.x + 70 > this.x && + 
    	player.y < this.y + 70 && player.y + 70 > this.y) {
        player.x = randomStart[Math.floor(Math.random() * randomStart.length)];
        player.y = 400;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.player = 'images/char-boy.png';
};

// Array of player starting positions
let randomStart = [100, 200, 300, 400];

// Player update method
Player.prototype.update = function() {
    if (this.y <= 0) {
        console.log('water!');
        // Randomize start location when updating
        this.x = randomStart[Math.floor(Math.random() * randomStart.length)];
        this.y = 400;
    }
};

// Player render method
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};

//Player handle key presses method
Player.prototype.handleInput = function(keyP) {
    if (keyP === 'left' && this.x > 0) {
        this.x -= 101;
    }
    if (keyP === 'right' && this.x < 400) {
        this.x += 101;
    }
    if (keyP === 'up' && this.y > 0) {
        this.y -= 83;
    }
    if (keyP === 'down' && this.y < 400) {
        this.y += 83;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let player = new Player(200, 400);
let allEnemies = [];
const enemyLocations = [60, 145, 230];

for (const enemyLocation of enemyLocations) {
    let enemy = new Enemy(0, enemyLocation, 200);
    allEnemies.push(enemy);
    console.log(enemyLocation);
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
