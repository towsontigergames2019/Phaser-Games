var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var button;
var music;
var cursors;
var scoreText;

var game = new Phaser.Game(config);

function preload() {
    this.load.image('sky', 'javascript/assets/sky.png');

    this.load.spritesheet('button',
        'javascript/assets/button-sheet.png',
        { frameWidth: 416, frameHeight: 419 }
    );
     this.load.audio('piano', ['javascript/assets/kirby_loop.mp3', 'javascript/assets/kirby_loop.ogg']);
}

function create() {
    //add background
    this.add.image(400, 300, 'sky');

    //add music
    music = this.sound.add('piano');
    music.loop = true;
    music.play(); 

    //add button sprite
    button = this.add.sprite(400, 300, 'button').setInteractive();
    
    //create cursor object for button input
    cursors = this.input.keyboard.createCursorKeys();
    //  Our player animations, turning, walking left and walking right.

    this.anims.create({
        key: 'off',
        frames: this.anims.generateFrameNumbers('button', { start: 0, end: 0 }),
        frameRate: 20,
        repeat: -1
    });
    this.anims.create({
        key: 'on',
        frames: this.anims.generateFrameNumbers('button', { start: 1, end: 1 }),
        frameRate: 20,
        repeat: -1
    });
    scoreText = this.add.text(16, 16, 'clicks: 0', { fontSize: '32px', fill: '#000' });

}

function update() {

    button.on('pointerdown', function (pointer) {
        button.anims.play('on', true);
    });



    if (cursors.space.isDown) {
        button.anims.play('on', true);
    }
    else {
        button.anims.play('off', true);
    }
}


 
