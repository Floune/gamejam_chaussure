/* eslint-disable */
import Logo from "@/objects/logo";
import Market from "./market";
import Flower from "./flower";

export default class Game extends Phaser.Scene {
  /**
   *  A sample Game scene, displaying the Phaser logo.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super({ key: "Game" });
    this.score = 100;
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
    const back_button = this.add.image(980, 620, "back").setScale(0.5, 0.5);
    // const pause_button = this.add.image(75, 660, "pause").setScale(0.5, 0.5);
    // const play_button = this.add.image(180, 660, "play").setScale(0.5, 0.5);
    back_button.setInteractive();
    back_button.alpha = 0.6;
    back_button.on("pointerup", () => {
      this.scene.remove("Market");
      this.scene.remove("Flower");
      this.scene.start("Title");
    });
    back_button.on("pointerover", () => back_button.setAlpha(1));
    back_button.on("pointerout", () => back_button.setAlpha(0.6));
    this.add.image(x, y, "background").setDepth(-1);
    this.registry.events.on("changedata", this.handle, this);
    this.scene.add("Flower", Flower, true, { score: this.score });
    this.scene.add("Market", Market, true, { score: this.score });
    this.data.scoreText = this.add
      .text(x, 20, "scoreE: " + this.score, {
        fontsize: "32px",
        fill: "#FFF"
      })
      .setDepth(1);

    // pause_button.setInteractive();
    // play_button.setInteractive();

    // pause_button.on("pointerup", () => {
    //   this.scene.pause();
    //   this.add.text(x - 150, 325, "|| Pause || ", {
    //     font: "64px Arial",
    //     color: "black"
    //   });
    // });

    // play_button.on("pointerup", () => {
    //   this.scene.resume();
    // });

    // pause_button.alpha = 0.6;
    // pause_button.on("pointerover", () => pause_button.setAlpha(1));
    // pause_button.on("pointerout", () => pause_button.setAlpha(0.6));

    // play_button.alpha = 0.6;
    // play_button.on("pointerover", () => play_button.setAlpha(1));
    // play_button.on("pointerout", () => play_button.setAlpha(0.6));
  }

  handle(parent, key, data) {
    this.score = data;
  }
  /**
   *  Called when a scene is updated. Updates to game logic, physics and game
   *  objects are handled here.
   *
   *  @protected
   *  @param {number} t Current internal clock time.
   *  @param {number} dt Time elapsed since last update.
   */

  render() {}
  update(/* t, dt */) {
    this.data.scoreText.setText("Score: " + this.score);
  }

  render(){

  }
}
