/** TO-DO:
 * - Implement spaceship controls -- improve animation
 * - Add bullets
 * - Add enemies
 * - Increase difficulty after each level
 * **/
var config = {
    type: Phaser.AUTO,
    width: 300,
    height: 500,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


var cursors;
var ship;
var bullet;
var game = new Phaser.Game(config);

function preload() {
    this.load.image('background', 'javascript/assets/background.png');
    this.load.spritesheet('ship',
        'javascript/assets/spaceship.png',
        { frameWidth: 62, frameHeight: 70 }
    );
    this.load.spritesheet('bullet', 'javascript/assets/bullet.png',
        { frameWidth: 13, frameHeight: 13 });
};
function create() {
    //add sprites and background
    this.add.image(360, 640, 'background');
    ship = this.physics.add.sprite(150, 470, 'ship');


    //add keyboard input
    cursors = this.input.keyboard.createCursorKeys();

    //set bounds
    ship.setBounce(0);
    ship.setCollideWorldBounds(true);
};
function update() {

    if (cursors.left.isDown) {
        ship.x = 30;
    }
    else if (cursors.right.isDown) {
        ship.x = 265;
    }
    else {
        ship.x = 150;



    }


};





