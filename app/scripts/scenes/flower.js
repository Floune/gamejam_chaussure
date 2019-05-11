export default class Flower extends Phaser.Scene {
  /**
   *  My custom scene.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super({ key: "Flower" });
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
    data.score = 0;
    data.scoreText = this.add.text(0, 0, "score: 0", {
      fontsize: "32px",
      fill: "#FFF"
    });
  }

  /**
   *  Used to declare game assets to be loaded using the loader plugin API.
   *
   *  @protected
   */
  preload() {
    this.load.image("flower", "tree.png");
  }

  /**
   *  Responsible for setting up game objects on the screen.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */
  create(data) {
    const x = this.cameras.main.width / 2;
    const y = this.cameras.main.height / 2;

    const image = this.add.sprite(x, y, "flower");
    image.setInteractive();
    image.on("pointerup", () => {
      data.score++;
      console.log(data.score);
    });
  }

  /**
   *  Handles updates to game logic, physics and game objects.
   *
   *  @protected
   *  @param {number} t - Current internal clock time.
   *  @param {number} dt - Time elapsed since last update.
   */
  update(/* t, dt */) {}

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
