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
    const back_button = this.add.image(1145, 665, "back").setScale(0.5, 0.5);
    const bg_choose = this.add.image(-50, 40, "table_1");
    const choix_bg_1 = this.add.image(30, 45, "chiffre_un").setScale(0.4, 0.4);
    const choix_bg_2 = this.add
      .image(60, 45, "chiffre_deux")
      .setScale(0.4, 0.4);
    const choix_bg_3 = this.add
      .image(90, 45, "chiffre_trois")
      .setScale(0.4, 0.4);
    const choix_bg_4 = this.add
      .image(120, 45, "chiffre_quatre")
      .setScale(0.4, 0.4);
    const label_change_bg = this.add.text(
      2,
      10,
      "Choisissez votre fond d'écran:",
      {
        font: "13px Arial",
        color: "white"
      }
    );
    const background1 = this.add.image(x, y, "background1").setDepth(-1);
    const background2 = this.add.image(x, y, "background2").setDepth(-1);
    const background3 = this.add.image(x, y, "background3").setDepth(-1);
    const background4 = this.add.image(x, y, "background4").setDepth(-1);
    choix_bg_1.setInteractive();
    choix_bg_2.setInteractive();
    choix_bg_3.setInteractive();
    choix_bg_4.setInteractive();

    choix_bg_1.on("pointerdown", () => {
      console.log("here");
      background3.destroy();
      this.add.image(x, y, "background1").setDepth(-1);
    });
    choix_bg_2.on("pointerdown", () => {
      console.log("here");
      background3.destroy();
      this.add.image(x, y, "background2").setDepth(-1);
    });
    choix_bg_3.on("pointerdown", () => {
      console.log("here");
      background3.destroy();
      this.add.image(x, y, "background3").setDepth(-1);
    });
    choix_bg_4.on("pointerdown", () => {
      console.log("here");
      background3.destroy();
      this.add.image(x, y, "background4").setDepth(-1);
    });

    back_button.setInteractive();
    back_button.alpha = 0.6;
    back_button.on("pointerup", () => {
      this.scene.remove("Market");
      this.scene.remove("Flower");
      this.scene.start("Title");
    });
    back_button.on("pointerover", () => back_button.setAlpha(1));
    back_button.on("pointerout", () => back_button.setAlpha(0.6));
    this.registry.events.on("changedata", this.handle, this);
    this.scene.add("Flower", Flower, true, { score: this.score });
    this.scene.add("Market", Market, true, { score: this.score });
    this.data.scoreText = this.add
      .text(x, 20, "scoreE: " + this.score, {
        fontsize: "32px",
        fill: "#FFF"
      })
      .setDepth(1);
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

  render() {}
}
