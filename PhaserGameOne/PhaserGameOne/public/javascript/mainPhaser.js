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

var game = new Phaser.Game(config);

function preload() {
    this.load.image('sky', 'javascript/assets/sky.png');
    this.load.image('active-button','javascript/assets/RedButton-Hover.png');

    this.load.spritesheet('dude',
        'assets/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );

     this.load.audio('piano', ['javascript/assets/kirby_loop.mp3', 'javascript/assets/kirby_loop.ogg']);
}

function create() {
    this.add.image(400, 300, 'sky');
    this.add.image(400, 300, 'active-button');
    music = this.sound.add('piano');
    music.loop = true;
    music.play(); 

}

function update() {

}
 
