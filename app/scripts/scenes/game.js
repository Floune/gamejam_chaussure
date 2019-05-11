/* eslint-disable */
import Logo from '@/objects/logo';
import Market from "./market";
import Flower from "./flower";

export default class Game extends Phaser.Scene {
  /**
   *  A sample Game scene, displaying the Phaser logo.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super({key: 'Game'});
    this.score = 0;
  }

  /**
   *  Called when a scene is initialized. Method responsible for setting up
   *  the game objects of the scene.
   *
   *  @protected
   *  @param {object} data Initialization parameters.
   */
  create(/* data */) {
    let score = 0;
    this.registry.events.on("changedata", this.handle, this);
    //  TODO: Replace this content with really cool game code here :)
    this.data.prout = 'prout';
    this.scene.add("Flower",Flower, true, {prout: this.data.prout});
    this.scene.add("Market",Market, true, {x: 0, y: 0});
  }

  handle(parent, key, data) {
    console.log(data);
    console.log('qsdqdqd');
  }
  /**
   *  Called when a scene is updated. Updates to game logic, physics and game
   *  objects are handled here.
   *
   *  @protected
   *  @param {number} t Current internal clock time.
   *  @param {number} dt Time elapsed since last update.
   */
  update(/* t, dt */) {

  }
}
