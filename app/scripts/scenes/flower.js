/* eslint-disable */
export default class Flower extends Phaser.Scene {
  /**
   *  My custom scene.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super();
  }

  /**
   *  Called when this scene is initialized.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */
  init(data) {
    const x = this.cameras.main.width / 2;
    const y = this.cameras.main.height / 2;
    console.log(data.score);
  }

  /**
   *  Used to declare game assets tonpm start be loaded using the loader plugin API.
   *
   *  @protected
   */

  preload() {}

  /**
   *  Responsible for setting up game objects on the screen.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */

  create(data) {
    const x = this.cameras.main.width / 2;
    const y = this.cameras.main.height / 2;

    const back_button = this.add.image(50, 620, "back").setScale(0.5, 0.5);
    const pause_button = this.add.image(1000, 660, "pause").setScale(0.5, 0.5);
    const play_button = this.add.image(1110, 660, "play").setScale(0.5, 0.5);

    back_button.setInteractive();
    pause_button.setInteractive();
    play_button.setInteractive();

    pause_button.on("pointerup", () => {
      this.scene.pause();
      this.add.text(x - 150, 325, "|| Pause || ", {
        font: "64px Arial",
        color: "black"
      });
    });

    play_button.on("pointerup", () => {
      this.scene.resume();
      console.log("here");
    });

    back_button.alpha = 0.6;
    back_button.on("pointerup", () => this.scene.start("Title"));
    back_button.on("pointerover", () => back_button.setAlpha(1));
    back_button.on("pointerout", () => back_button.setAlpha(0.6));

    pause_button.alpha = 0.6;
    pause_button.on("pointerover", () => pause_button.setAlpha(1));
    pause_button.on("pointerout", () => pause_button.setAlpha(0.6));

    play_button.alpha = 0.6;
    play_button.on("pointerover", () => play_button.setAlpha(1));
    play_button.on("pointerout", () => play_button.setAlpha(0.6));
  }

  handle(parent, key, data) {
    console.log(parent, key, data);
    console.log("prout");
  }

  /**
   *  Handles updates to game logic, physics and game objects.
   *
   *  @protected
   *  @param {number} t - Current internal clock time.
   *  @param {number} dt - Time elapsed since last update.
   */

  update(data) {
    const x = this.cameras.main.width / 2;
    const y = this.cameras.main.height / 2;
    const flower = this.add.sprite(x + 20, y, "flower");
    flower.setInteractive();
    flower.on("pointerdown", () => {
      this.data.score++;
      console.log(this.data.score);
    });
  }

  /**
   *  Called after a scene is rendered. Handles rendenring post processing.
   *
   *  @protected
   */
  render() {}

  /**
   *  Called when a scene is about to shut down.
   *
   *  @protected
   */
  shutdown() {}

  /**
   *  Called when a scene is about to be destroyed (i.e.: removed from scene
   *  manager). All allocated resources that need clean up should be freed up
   *  here.
   *
   *  @protected
   */
  destroy() {}
}
