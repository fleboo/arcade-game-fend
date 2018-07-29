# Arcade Game Project

This is a simple arcade game that contains a Player and Enemies (cockroaches). The objective of the game is for the player to reach the water without colliding with enemies. The game is won when the player enters the water. The game is restarted upon collision. The enemies move from left to right in fluctuating speeds. The player can mover up, down, right, left.

## Instructions

* The games begins automatically upon the web page launch
* Begin by pressing any of the arrow keys. 
* Begin moving toward the water, ensure to avoid the enemies.

## Dependencies and Acknowledgments

* Richard Kalehoff with Udacity for the initial HTML, CSS, images, game loop engine, and starter code.

## How I Designed the Game

* The Enemy constructor function
	*Set the Enemy initial location
	*Set the Enemy speed
	*Update the Enemy location
	*Handle collisions with Player
*The Player constructor functions
	*Load player image
	*Set player initial location
	*Render method for the player
	*Handle user arrow key inputs