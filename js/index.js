const Phaser = require('phaser');

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#5f2a55",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{

}

function create ()
{
    this.add.text(50,100, "Bee clicker", {font: "50px Times New Roman", fill:"#FF1493"});
    this.add.text(50, 300, "By ¯(ツ)/¯", {font: "50px Times New Roman", fill:"#FF1493"});
}