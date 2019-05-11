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
    console.log(data);
    const x = this.cameras.main.width / 2;
    const y = this.cameras.main.height / 2;
    this.data.score = 0;
    this.data.scoreText = this.add.text(x, 10, "score: " + this.data.score, {
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
    this.load.image("flower", "flower3.png");
    this.load.image("back", "layer07_Sky.png");
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
    // this.add.image(x, y, "back");
    image.on("pointerdown", () => {
      this.data.score++;
      this.registry.set('score', this.data.score);
      //console.log(this.data.score);
    });
    image.setInteractive();
    // this.add.image(x, y, "back");
  }

  handle(parent, key, data) {
    console.log(parent, key, data);
    console.log('prout');
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
    const image = this.add.sprite(x, y, "flower");

    image.on("pointerdown", () => {
      this.data.score++;
      console.log(this.data.score);
    });
    this.data.scoreText.setText("Score: " + this.data.score);
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
