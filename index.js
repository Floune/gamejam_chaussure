const Phaser = require('phaser');

var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 760,
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

}