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
    const x = this.cameras.main.width / 2;
    const y = this.cameras.main.height / 2;
    this.add.image(x, y, "background").setDepth(-1);
    this.registry.events.on("changedata", this.handle, this);
    this.scene.add("Flower",Flower, true, {score: this.score});
    this.scene.add("Market",Market, true, {score: this.score});
    this.data.scoreText = this.add.text(x, 20, "scoreE: " + this.score, {
      fontsize: "32px",
      fill: "#FFF"
    }).setDepth(1);
  }

  handle(parent, key, data) {
    this.score = data
  }
  /**
   *  Called when a scene is updated. Updates to game logic, physics and game
   *  objects are handled here.
   *
   *  @protected
   *  @param {number} t Current internal clock time.
   *  @param {number} dt Time elapsed since last update.
   */

  render() {
  }
  update(/* t, dt */) {
    this.data.scoreText.setText("Score: " + this.score);
  }
}
