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

  }

  /**
   *  Used to declare game assets to be loaded using the loader plugin API.
   *
   *  @protected
   */
   preload() {
    this.load.image("flower", "flower3.png");
  }

  /**
   *  Responsible for setting up game objects on the screen.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */
   create(data) {
    this.score = data.score;

    const x = this.cameras.main.width / 2;
    const y = this.cameras.main.height / 2;
    const flower = this.add.sprite(x, y, "flower");
    flower.on("pointerdown", () => {
      this.score++;
      this.registry.set('score', this.score);
    });
    this.registry.events.on("changedata", this.handle, this);
    flower.setInteractive();
  }

  handle(parent, key, data) {
    this.score = data
  }

  /**
   *  Handles updates to game logic, physics and game objects.
   *
   *  @protected
   *  @param {number} t - Current internal clock time.
   *  @param {number} dt - Time elapsed since last update.
   */
   update(data) {

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
